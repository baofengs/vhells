<template>
    <button 
        :class="['v-button', sizeClass]"
        @click="$emit('click', $event)"
        :disabled="disabled">
        <icon v-if="icon && !loading" :icon="icon" :class="[iconPositionClass, 'v-button-icon']"></icon>
        <icon v-if="loading" icon="reload" :class="[iconPositionClass, 'v-button-icon', 'v-button-icon--loading']"></icon><slot></slot></button>
</template>

<script>
import Icon from '../icon/Icon';
export default {
    name: 'v-button',
    components: {Icon},
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            validator (value) {
                return value === 'left' || value === 'right';
            }
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'default',
            validator (value) {
                return ['default', 'big', 'small'].indexOf(value) !== -1;
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        iconPositionClass () {
            return `v-button-icon-${this.iconPosition}`;
        },
        sizeClass () {
            return `v-button-${this.size}`;
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/utils/variables';
@import '../../assets/scss/utils/mixin';

.v-button {
    // $v-border-color: cyan;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $v-font-size;
    outline: none;
    background-color: #fff;
    padding: 0 1em;
    border-radius: 4px;
    vertical-align: top;
    line-height: 30px;
    border: 1px solid $v-border-color;
    &:hover {
        background-color: $v-hover-color;
        cursor: pointer;
    }
    &:active {
        outline: none;
        box-shadow: none;
        background-color: $v-active-color;
    }
    &-default {
        line-height: 30px;
    }
    &-big {
        display: flex;
        width: 100%;
    }
    &-small {
        font-size: $v-caption-font-size;
        line-height: 24px;
    }
    &-icon {
        order: 0;
        margin-right: .5em;
        &-left {
            order: 0;
            margin-right: .5em;
        }
        &-right {
            order: 1;
            margin-right: 0;
            margin-left: .5em;
        }
        &--loading {
            @include spin(1);
        }
    }
    &[disabled] {
        background-color: $v-disabled-color;
        cursor: not-allowed;
    }
}
</style>
