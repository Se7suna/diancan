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
        position: relative;
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
    .header-left {
        position: absolute;
        left: 0;
        margin-left: 16px;
        font-size: 22px;
    }
    .header-right {
        position: absolute;
        right: 0;
        text-decoration: none;
        color: #fff;
        margin-right: 16px;
        font-size: 16px;
    }
</style>
