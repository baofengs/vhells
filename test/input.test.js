const expect = chai.expect;
import Vue from 'vue';
import Input from '../lib/input/input';

// const isHeadlessChrome = /\bHeadlessChrome\//.test(navigator.userAgent)
Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('input', () => {
    const Constructor = Vue.extend(Input);
    let vm;

    it('存在', () => {
        expect(Input).to.be.ok;
    });

    describe('Props', () => {

        afterEach(() => {
            vm.$el.remove();
            vm.$destroy();
        });

        it('可以设置 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '小屁孩儿'
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            expect(input.value).to.eq('小屁孩儿');
        });

        it('可以设置 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            const disabled = input.getAttribute('disabled');
            expect(disabled).to.be.ok;
        });

        it('可以设置 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            expect(input.readOnly).to.eq(true);
        });

        it('可以设置 placeholder', () => {
            vm = new Constructor({
                propsData: {
                    placeholder: '请输入姓名'
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            expect(input.placeholder).to.eq('请输入姓名');
        });

        it('可以设置 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '出错了'
                }
            });
            vm.$mount();
            const errorIcon = vm.$el.querySelector('use');
            expect(errorIcon.getAttribute('xlink:href')).to.eq('#i-warning-circle-fill');
            const errorMessage = vm.$el.querySelector('.v-input-error-message');
            expect(errorMessage.textContent).to.eq('出错了');
        });
    });

    describe('Events', () => {
        afterEach(() => {
            vm.$el.remove();
            vm.$destroy();
        });

        const events = ['change', 'blur', 'focus', 'input'];

        events.map(eventName => {
            it(`支持 ${eventName} 事件`, () => {
                const vm = new Constructor();
                vm.$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                const event = new Event(eventName);
                Object.defineProperty(event, 'target', { value: { value: 'hello' }, enumerable: true });
                const input = vm.$el.querySelector('input');
                input.dispatchEvent(event);
                expect(callback).to.be.calledWith('hello');
            });
        });

        // it('支持 change 事件', () => {
        //     const vm = new Constructor();
        //     vm.$mount();
        //     const callback = sinon.fake();
        //     vm.$on('change', callback);
        //     const event = new Event('change');
        //     const input = vm.$el.querySelector('input');
        //     input.dispatchEvent(event);
        //     expect(callback).to.be.calledWith(event);
        // });

        // it('支持 blur 事件', () => {
        //     const vm = new Constructor();
        //     vm.$mount();
        //     const callback = sinon.fake();
        //     vm.$on('blur', callback);
        //     const event = new Event('blur');
        //     const input = vm.$el.querySelector('input');
        //     input.dispatchEvent(event);
        //     expect(callback).to.be.calledWith(event);
        // });

        // it('支持 focus 事件', () => {
        //     const vm = new Constructor();
        //     vm.$mount();
        //     const callback = sinon.fake();
        //     vm.$on('focus', callback);
        //     const event = new Event('focus');
        //     const input = vm.$el.querySelector('input');
        //     input.dispatchEvent(event);
        //     expect(callback).to.be.calledWith(event);
        // });

        // it('支持 input 事件', () => {
        //     const vm = new Constructor();
        //     vm.$mount();
        //     const callback = sinon.fake();
        //     vm.$on('input', callback);
        //     const event = new Event('input');
        //     Object.defineProperty(event, 'target', { value: { value: 'hello' }, enumerable: true});
        //     const input = vm.$el.querySelector('input');
        //     input.dispatchEvent(event);
        //     expect(callback).to.be.calledWith('hello');
        // });

    });
});
