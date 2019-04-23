<style lang="scss">
@import '../../assets/scss/utils/variables';

.v-input-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $v-font-size;
    color: $v-primary-font-color;
    > :not(:last-child) {
        margin-right: 5px;
    }
    .v-input {
        outline: none;
        box-shadow: none;
        border: 1px solid $v-input-default-border-color;
        border-radius: $v-border-radius;
        line-height: 36px;
        height: 36px;
        padding: 0 1.28em;
        font-size: inherit;
        color: inherit;
        &::placeholder {
            color: $v-input-disabled-color;
        }
        &:hover {
            border-color: $v-input-hover-border-color;
        }
        &:focus {
            outline: none;
            border-color: $v-input-focus-border-color;
        }
        &[disabled] {
            background: $v-input-disabled-bg-color;
            color: $v-input-disabled-color;
            background: #F2F4F7;
            &:hover {
                border-color: $v-input-default-border-color;
                cursor: not-allowed;
            }
        }
        &[readonly] {
            background: $v-input-disabled-bg-color;
            color: $v-input-disabled-color;
            background: #F2F4F7;
            &:hover {
                cursor: not-allowed;
            }
        }
        &-error {
            border-color: $v-input-error-border-color !important;
            color: $v-input-error-border-color;
            font-size: inherit;
            &-icon {
                color: $v-red;
                &:hover {
                    cursor: pointer;
                }
            }
            &-message {
                color: $v-red;
            }
        }
    }
}
</style>

<template>
    <div class="v-input-wrapper">
        <input 
            :class="['v-input', {'v-input-error': error}]"
            type="text" 
            :disabled="disabled" 
            :readonly="readonly" 
            :value="value" 
            :placeholder="placeholder" 
            @change="$emit('change', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            />
        <template v-if="error">
            <icon class="v-input-error-icon" icon="warning-circle-fill"></icon>
            <span class="v-input-error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from '../icon/Icon';

export default {
    name: 'v-input',
    components: { Icon },
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        disabled: {
            type: Boolean
        },
        readonly: {
            type: Boolean
        },
        error: {
            type: String,
            default: ''
        }
    }
}
</script>
