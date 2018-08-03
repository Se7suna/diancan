<template>
    <div class="app">
        <router-view class="view"/>
        <FooterGuide v-show="$route.meta.showFooter"/>
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
    @import '../static/css/reset.css';
    @import '../static/css/swiper.css';
    .app {
        box-sizing: border-box;
        width: 414px;
        height: 736px;
        border: 1px solid #3c3c3d;
        margin: 0 auto
    }
    .view {
        overflow: auto;
        width: 100%;
        height: 678px;
    }
</style>
