<template>
    <div class="shopcar">
        <div class="shopcar_top">
            <span>
                满10减10元, 满20减30元, 满10减10元, 满20减30元
            </span>
        </div>
        <div class="shopcar_main" v-if="$store.state.showShop.car && $store.state.showShop.car.length">
            <div class="shopcar_main_top">
                <div class="left">已选商品</div>
                <div class="right">
                    <i class="iconfont icon-huishouzhan"></i>
                    <span>清空</span>
                </div>
            </div>
            <ul class="shopcar_main_list">
                <li class="shopcar_main_item" v-for="(item, index) of $store.state.showShop.car" :key="index">
                    <div class="left">
                        <span class="item">{{item.name}}</span>
                        <span class="money">￥{{item.money}}</span>
                    </div>
                    <CarCtrl/>
                </li>
            </ul>
        </div>
        <div class="shopcar_bot clearfix">
            <div class="left">
                <i class="iconfont icon-gouwuche1"></i>
                <span>6</span>
            </div>
            <div class="mid">
                <p class="top">未选购商品</p>
                <p class="bot">另需配送费4.5元</p>
            </div>
            <div class="right">
                <span>￥15起送</span>
            </div>
        </div>
    </div>
</template>
<script>
    import CarCtrl from '../CarCtrl/CarCtrl.vue'
    export default {
        components: {
            CarCtrl
        }
    }
</script>
<style lang="less">
    .shopcar_top {
        text-align: center;
        padding: 2px 74px;
        background-color: #fffad8;
        border-top: 1px solid #f9e9a7;
        span {
            display: inline-block;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .shopcar_main_top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #eceff1;
        border-bottom: 1px solid #a2a2a2;
        .left {
            color: #666;
            font-size: 16px;
            padding: 14px 18px;
        }
        .right {
            font-size: 14px;
            color: #69696b;
            margin-right: 18px;
            i {
                font-size: 16px;
                color: #a2a2a2
            }
        }
    }
    .shopcar_main_item {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        border-bottom: 1px solid #eee;
        margin-left: 14px;
        padding-right: 14px;
        .left {
            display: flex;
            flex: 1;
            justify-content: space-between;
            font-size: 16px;
            color: #333;
            padding: 22px 0;
            margin-right: 28px;
            .money {
                font-size: 14px;
                color: #ff5339
            }
        }
    }
    .shopcar_bot {
        background-color: #505052;
        border: 1px solid #50504e;
        .left {
            position: relative;
            top: -10px;
            float: left;
            box-sizing: border-box;
            width: 56px;
            height: 56px;
            line-height: 46px;
            text-align: center;
            background-color: #363636;
            margin-left: 12px;
            border: 6px solid #444;
            border-radius: 50%;
            i {
                font-size: 30px;
                color: #5f5f63;
            }
            span {
                position: absolute;
                display: block;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                color: #fff;
                right: -8px;
                top: -8px;
                font-size: 8px;
                background-color: #ff5415;
                border-radius: 50%
            }
        }
        .mid {
            float: left;
            color: #999;
            margin-left: 20px;
            .top {
                font-size: 14px;
                margin-top: 14px;
            }
            .bot {
                font-size: 12px;
                margin-top: 4px;
            }
        }
        .right {
            float: right;
            height: 100%;
            font-size: 16px;
            font-weight: 800;
            color: #fff;
            background-color: #535356;
            padding: 18px 28px;
        }
    }
</style>
