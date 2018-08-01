<template>
    <div class="app">
        <router-view class="view"/>
        <FooterGuide/>
    </div>
</template>
<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
        components: {
            FooterGuide
        }
    }
</script>
<style lang="less">
    .app {
        width: 412px;
        height: 737px;
        border: 1px solid #3c3c3d;
        margin: 0 auto
    }
    .view {
        overflow: auto;
        width: 100%;
        height: 681px;
    }
</style>
