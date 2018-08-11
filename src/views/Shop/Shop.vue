<template>
    <div class="shop">
        <div class="shop_top">
            <i class="iconfont icon-fanhui"  @click="$router.replace('/msite')"></i>
            <div class="shop_top_log">
                <img src="./img/ia_10020.png">
            </div>
        </div>
        <div class="shop_title">
            <h4 class="shop_title_name">汉莱克炸鸡汉堡</h4>
            <div class="shop_title_small">
                <span class="left">评价</span>
                <span class="mid">月售1211单</span>
                <span class="right">蜂鸟快送约33分钟</span>
            </div>
            <div class="shop_title_sales">
                <span class="left">满减</span>
                <span class="mid">满10减11, 满20减21, 满30减31, 满50减51</span>
                <span class="right">78个优惠<i class="iconfont icon-sort-small-copy-copy"></i></span>
            </div>
            <div class="shop_title_ad">
                <span class="left">公告:</span>
                <span class="right">新店开业请多多支持, 不足的地方多多包含. 谢谢!</span>
            </div>
            <div class="shop_title_link">
                <div class="left" @click="$router.replace('/shop/choose')" :class="{on: $route.path === '/shop/choose'}">点餐</div>
                <div class="mid" @click="$router.replace('/shop/score')" :class="{on: $route.path === '/shop/score'}">评价</div>
                <div class="right" @click="$router.replace('/shop/eval')" :class="{on: $route.path === '/shop/eval'}">商家</div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="less">
    .shop_top {
        height: 110px;
        background-color: #c4bccc;
        i {
            display: inline-block;
            color: #fff;
            font-size: 16px;
            margin-top: 10px;
            margin-left: 12px
        }
    }
    .shop_top_log {
        position: relative;
        bottom: -20px;
        width: 84px;
        background-color: #fffdff;
        border: 1px solid #f4f4f4;
        border-radius: 5px;
        margin: 0 auto;
        img {
            width: 84px;
            height: 84px;
        }
    }
    .shop_title {
        border-bottom: 1px solid #ebebeb
    }
    .shop_title_name {
        font-size: 20px;
        font-weight: 800;
        color: #333;
        margin-top: 38px;
        text-align: center;
    }
    .shop_title_small {
        font-size: 12px;
        color: #767676;
        text-align: center;
        margin-top: 10px;
        .mid {
            margin: 0 12px;
        }
    }
    .shop_title_sales {
        display: flex;
        width: 330px;
        margin: 16px auto 0;
        .left {
            align-items: center;
            display: inline-block;
            color: #fff;
            padding: 3px 5px;
            border-radius: 2px;
            background-color: #f07373
        }
        .mid {
            align-items: center;
            line-height: 18px;
            width: 212px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #4d4d4d;
            margin-left: 8px;
        }
        .right {
            align-items: center;
            float: right;
            color: #a2a2a0;
            i {
                margin-left: 6px;
            }
        }
    }
    .shop_title_ad {
        width: 330px;
        margin: 12px auto 0;
        color: #a3a3a3;
        font-size: 12px;
        .left {
            margin-right: 8px;
        }
        .right {
            display: inline-block;
            width: 290px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .shop_title_link {
        width: 308px;
        margin: 26px auto 0;
        text-align: center;
        div {
            display: inline-block;
            box-sizing: border-box;
            height: 32px;
            font-size: 16px;
            color: #666;
        }
        .left {
            float: left;
        }
        .right {
            float: right;
        }
        .on {
            font-weight: 800;
            color: #4d4d4d;
            border-bottom: 3px solid #2395ff
        }
    }
</style>
