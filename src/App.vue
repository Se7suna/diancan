<template>
    <div class="app">
        <router-view class="view"/>
        <FooterGuide v-if="$route.meta.showFooter"/>
        <ShopCar v-if="$route.meta.showShopCar"/>
    </div>
</template>
<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    import ShopCar from './components/ShopCar/ShopCar.vue'
    export default {
        components: {
            FooterGuide,
            ShopCar
        }
    }
</script>
<style lang="less">
    @import '../static/css/reset.css';
    @import '../static/css/swiper.css';
    @import "https://at.alicdn.com/t/font_762088_dviw8a1t14v.css";
    .clearfix {
        *zoom: 1;
        &:before,
        &:after {
            content: "";
            display: table;
            line-height: 0;
        }
        &:after {
            clear: both;
        }
    }
    .app {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 414px;
        height: 736px;
        border: 1px solid #3c3c3d;
        margin: 0 auto
    }
    .view {
        flex: 1;
        overflow: auto;
        width: 100%;
    }
    .swal2-popup {
        font-size: 14px;
    }
</style>
