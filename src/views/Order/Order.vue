<template>
    <div class="order">
        <HeaderTop :title="'订单'">
            <i slot="left" class="iconfont icon-fanhui header-left" @click="$router.back()"></i>
        </HeaderTop>
        <ul class="order_main" v-if="$store.state.user.id">
            <li class="order_main_item" v-for="item of $store.state.user.order" :key="item.time">
                <div class="order_item_logo">
                    <img :src="item.img">
                </div>
                <div class="order_item_details">
                    <div class="up">
                        <div>
                            <span class="left">{{item.shop}}</span>
                            <i class="iconfont icon-gengduo"></i>
                            <span class="right">{{item.state ? "订单已送达" : "正在配送"}}</span>
                        </div>
                        <p>{{item.time|time()}}</p>
                    </div>
                    <div class="down">
                        <span class="left">{{item.buy[0].name}}等{{item.buy.length}}件商品</span>
                        <span class="right">￥{{item.buy|money()}}</span>
                    </div>
                </div>
                <div class="order_item_bot">
                        <button class="yes" v-if="item.eval">评价得金币</button>
                        <button class="no" v-else>已评价</button>
                </div>
            </li>
        </ul>
        <div class="order_main_login" v-else>
            <router-link to="/login">登录</router-link> 查看订单详情
        </div>
    </div>
</template>
<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        components: {
            HeaderTop
        },
        filters: {
            money: function (arr) {
                let res = 0
                for (let i of arr) {
                    res += i.price
                }
                return res.toFixed(2)
            },
            time: function (num) {
                num = Date.now() - num
                let hour = parseInt(num / 3600000)
                let min = parseInt(num % 3600000 / 60000)
                return `${hour}小时${min}分钟前`
            }
        }
    }
</script>
<style lang="less">
    .order {
        background-color: #f5f5f5
    }
    .order_main_item {
        margin-top: 12px;
        padding: 16px 0 12px 18px;
        background-color: #fff;
    }
    .order_main_login {
        font-size: 16px;
        text-align: center;
        margin-top: 200px;
        a {
            color: #008eff
        }
    }
    .order_item_logo {
        float: left;
        margin-right: 12px;
        padding-bottom: 60px;
        img {
            width: 33px;
            height: 33px;
            border: 1px solid #eee;
        }
    }
    .order_item_details {
        .up {
            div {
                height: 24px;
                line-height: 24px;
            }
            .left {
                float: left;
                max-width: 165px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                color: #333;
            }
            i {
                font-size: 10px;
                color: #c6c6c6;
            }
            .right {
                float: right;
                font-size: 14px;
                color: #333;
                margin-right: 14px
            }
            p {
                font-size: 12px;
                color: #a3a3a3;
                margin-top: 5px;
                margin-bottom: 12px;
            }
        }
        .down {
            height: 50px;
            line-height: 50px;
            margin-left: 47px;
            border-top: 1px solid #eee;
            .left {
                font-size: 14px;
                color: #666;
            }
            .right {
                float: right;
                font-size: 12px;
                color: #333;
                margin-right: 12px;
            }
        }
    }
    .order_item_bot {
        overflow: hidden;
        border-top: 1px solid #eee;
        button {
            float: right;
            width: 93px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #fff;
            border-radius: 2px;
            margin-top: 12px;
            margin-right: 12px;
        }
        .yes {
            border: 1px solid #ff5339;
        }
        .no {
            border: 1px solid #999;
        }
    }
</style>
