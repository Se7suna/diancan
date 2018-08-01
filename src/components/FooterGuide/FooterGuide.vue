<template>
    <div class="footer">
        <router-link to="/msite" class="footer-item" :class="{on: $route.path === '/msite'}">
            <i class="iconfont icon-waimai"></i>
            首页
        </router-link>
        <router-link to="/search" class="footer-item" :class="{on: $route.path === '/search'}">
            <i class="iconfont icon-icon-"></i>
            搜索
        </router-link>
        <router-link to="/order" class="footer-item" :class="{on: $route.path === '/order'}">
            <i class="iconfont icon-dingdan"></i>
            订单
        </router-link>
        <router-link to="/profile" class="footer-item" :class="{on: $route.path === '/profile'}">
            <i class="iconfont icon-geren"></i>
            个人
        </router-link>
    </div>
</template>
<script>
</script>
<style lang="less">
    @import url("http://at.alicdn.com/t/font_762088_7yede9dn2yn.css");
    .footer {
        display: flex;
        width: 100%;
        height: 56px;
        text-align: center;
        border-top: 1px  solid #ededed
    }
    .footer-item {
        display: inline-block;
        flex: 1;
        align-self: center;
        font-size: 12px;
        color: #818181;
        i {
            display: block;
            font-size: 22px;
            margin-bottom: 2px
        }
    }
    .on {
        color: #0089dc
    }
</style>
