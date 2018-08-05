<template>
    <div class="search">
        <HeaderTop :title="'搜索'"/>
        <div class="search_top">
            <div class="search_top_input">
                <i class="iconfont icon-icon-"></i>
                <input type="text" placeholder="输入商家、商品名称">
            </div>
            <div class="left" @click="$router.back()">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <div class="right">
                <span>搜索</span>
            </div>
        </div>
        <div class="search_main">
            <p class="search_main_top">
                热门搜索
            </p>
            <div class="search_main_item">
                <span class="search_item_name">
                    羊肉粉
                </span>
                <span class="search_item_name">
                    烧烤
                </span>
            </div>
        </div>
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
    .search_top {
        height: 57px;
        text-align: center;
        padding: 13px 60px 0 52px;
        .left {
            float: left;
            width: 52px;
            line-height: 31px;
            color: #999;
            font-size: 12px;
            margin-left: -100%;
            position: relative;
            left: -52px;
        }
        .right {
            float: left;
            width: 60px;
            line-height: 31px;
            color: #333;
            font-size: 16px;
            margin-left: -60px;
            position: relative;
            right: -60px;
        }
    }
    .search_top_input {
        float: left;
        width: 100%;
        i {
            float: left;
            width: 36px;
            height: 31px;
            line-height: 31px;
            color: #a5a5a5;
            font-size: 16px;
            background-color: #f8f8f8;
        }
        input {
            float: left;
            box-sizing: border-box;
            width: 262px;
            height: 31px;
            color: #c5c5c5;
            background-color: #f8f8f8;
            border: 0;
        }
    }
    .search_main {
        margin: 0 15px;
    }
    .search_main_top {
        height: 42px;
        font-size: 16px;
        color: #666
    }
    .search_item_name {
        display: inline-block;
        padding:12px;
        font-size: 14px;
        color: #666;
        background-color: #f7f7f7;
        margin-right: 15px;
    }
</style>
