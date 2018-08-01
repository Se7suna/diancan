<template>
    <header class="header">
        <slot name="left"></slot>
        <span class="header-mid">{{title}}</span>
        <slot name="right"></slot>
    </header>
</template>
<script>
    export default {
        props: ['title']
    }
</script>
<style lang="less">
    .header {
        width: 100%;
        height: 57px;
        line-height: 57px;
        background-color: #008eff;
        text-align: center;
        color: #fff
    }
    .header-mid {
        font-size: 20px;
        font-weight: 800
    }
</style>
