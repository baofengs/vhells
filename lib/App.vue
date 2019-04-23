<template>
    <div class="cmp-app">
        <div class="box">
            <v-button :loading="loading" @click="onClick" size="big">按钮</v-button>
            <v-button :loading="loading" @click="onClick" icon="setting" size="small">按钮</v-button>
            <v-button :loading="loading" @click="onClick" icon="setting" icon-position="right">按钮</v-button>
            <v-button :loading="loading" @click="onClick" disabled>按钮</v-button>
        </div>
        <div class="box">
            <v-button-group>
                <v-button icon="left">上月</v-button>
                <v-button>当月</v-button>
                <v-button icon="right" icon-position="right">下月</v-button>
            </v-button-group>
        </div>
    </div>
</template>

<script>
import Button from './button/button';
import ButtonGroup from './button/button-group';

export default {
    components: {
        'v-button': Button,
        'v-button-group': ButtonGroup
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
    .box {
        border: 1px dashed;
        padding: 20px;
        margin: 20px;
    }
}
</style>
