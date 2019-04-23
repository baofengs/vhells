<template>
    <div class="cmp-app">
        <v-button :loading="loading" @click="onClick" size="big">按钮</v-button>
        <v-button :loading="loading" @click="onClick" icon="setting" size="small">按钮</v-button>
        <v-button :loading="loading" @click="onClick" icon="setting" icon-position="right">按钮</v-button>
        <v-button :loading="loading" @click="onClick" disabled>按钮</v-button>
    </div>
</template>

<script>
import Button from './button/button';

export default {
    components: {
        'v-button': Button,
    },
    data () {
        return {
            message: 'hello',
            loading: false
        }
    },
    methods: {
        onClick (e) {
            console.log('clicked: ', e);
            this.loading = !this.loading;
        }
    }
}
</script>

<style lang="scss">
.cmp-app {
    border: 1px dashed;
    padding: 20px;
    margin: 20px;
}
</style>
