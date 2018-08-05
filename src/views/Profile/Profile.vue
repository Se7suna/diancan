<template>
    <div class="profile">
        <HeaderTop :title="'我的'">
            <i slot="left" class="iconfont icon-fanhui header-left" @click="$router.back()"></i>
        </HeaderTop>
        <div class="profile_login">

        </div>
        <div class="profile_money">

        </div>
        <ul class="profile_option">
            <div class="profile_option address"></div>
            <div class="profile_option_shop"></div>
            <div class="profile_option_service"></div>
        </ul>
    </div>
</template>
<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        components: {
            HeaderTop
        }
    }
</script>
<style lang="less">
    .profile_login {
        height: 113px;
    }
</style>
