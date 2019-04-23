<template>
    <svg class="v-icon" aria-hidden="true">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script>
export default {
    props: ['icon']
}
</script>

<style lang="scss">
.v-icon {
    width: 14px;
    height: 14px;
    fill: currentColor;
}
</style>
