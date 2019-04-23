<template>
    <div class="v-button-group"><slot></slot></div>
</template>

<script>
export default {
    name: 'VButtonGroup',
    mounted () {
        for (let node of this.$el.children) {
            const name = node.nodeName.toLowerCase();
            if (name !== 'button') {
                throw new Error(`v-button-group 的子元素应该全是 v-button，但是你写的是 ${name}`);
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/utils/variables';
.v-button-group {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    border-radius: 4px;
    > .v-button {
        border-radius: 0;
        &:first-child {
            border-radius: 4px 0 0 4px;
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>
