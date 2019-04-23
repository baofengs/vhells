const expect = chai.expect;
import Vue from 'vue';
import Button from '../lib/button/button';

describe('Button', () => {
    let Constructor = Vue.extend(Button);
    let vm;

    afterEach(() => {
        vm.$el.remove();
        vm.$destroy();
    });

    it('存在', () => {
        vm = new Constructor();
        vm.$mount();
        expect(Button).to.be.ok;
    });

    it('名字是「你好」', () => {
        vm = new Constructor();
        vm.$slots.default = '你好';
        vm.$mount();
        const text = vm.$el.innerText.trim();
        expect(text).to.eq('你好');
    });

    it('可以设置 icon', () => {
        vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        });
        vm.$mount();
        const useElement = vm.$el.querySelector('use');
        const href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#i-setting');
    });

    it('icon 默认 order 是 0', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        });
        vm.$mount(div);
        const icon = vm.$el.querySelector('svg');
        const order = window.getComputedStyle(icon).order;
        expect(order).to.eq('0');
    });
    
    it('设置 iconPosition 改变 order', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        });
        vm.$mount(div);
        const icon = vm.$el.querySelector('svg');
        const order = window.getComputedStyle(icon).order;
        expect(order).to.eq('1');
    });

    it('可以设置 loading', () => {
        vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        });
        vm.$mount();
        const useElements = vm.$el.querySelectorAll('use');
        const loadingHref = useElements[0].getAttribute('xlink:href');
        expect(useElements.length).to.eq(1);
        expect(loadingHref).to.eq('#i-reload');
    });

    it('可以设置 disabled', () => {
        vm = new Constructor({
            propsData: {
                icon: 'setting',
                disabled: true
            }
        });
        vm.$mount();
        const disabled = vm.$el.getAttribute('disabled');
        expect(disabled).to.eq('disabled');
    });

    it('触发点击事件', () => {
        vm = new Constructor();
        vm.$slots.default = 'foo';
        vm.$mount();
        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});
