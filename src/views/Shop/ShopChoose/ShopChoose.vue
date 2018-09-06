<template>
    <div class="shop_choose">
        <div class="shop_choose_top" v-if="showShop.food">
            <p class="title">商家推荐</p>
            <ul class="shop_top_main">
                <li class="shop_main_item" v-for="(item, index) of showShop.food[0].foods" v-if="item.show" :key="index">
                    <img :src="item.img">
                    <p class="name">{{item.name}}</p>
                    <p class="num">月售{{item.num}} 好评率{{item.good}}%</p>
                    <div class="sale">
                        <span class="left">￥{{item.now}}</span>
                        <CarCtrl :foodId="item.id" :buy="item.buy"/>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shop_choose_itme">
            <ul class="shop_itme_left">
                <li :class="{on: num === index}" v-for="(item, num) of showShop.food" :key="item.id" @click="turn(num)">
                    <img :src="item.logo">
                    <span>{{item.title}}</span>
                </li>
            </ul>
            <div class="shop_itme_right" ref="shopDl" @scroll="dlScroll">
                <dl class="shop_right_dl" v-for="item of showShop.food" :key="item.id">
                    <dt class="shop_right_dt">
                        <span class="left">{{item.title}}</span>
                        <span class="right">{{item.info}}</span>
                    </dt>
                    <dd class="shop_right_dd" v-for="(food, index) of item.foods" :key="index">
                        <div class="log">
                            <img :src="food.img">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>{{food.name}}</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售{{food.num}}份</span>
                                    <span class="right">好评率{{food.good}}%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">{{food.sale}}折</span>
                                    <span class="right">{{food.ad}}</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div class="money">
                                    <span class="left">￥</span>
                                    <span class="mid">{{food.now}}</span>
                                    <span class="right">{{food.before}}</span>
                                </div>
                                <CarCtrl :foodId="food.id" :buy="food.buy"/>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
    import CarCtrl from '../../../components/CarCtrl/CarCtrl.vue'
    export default {
        data () {
            return {
                index: 0,
                tops: []
            }
        },
        computed: {
            showShop () {
                return this.$store.state.showShop
            }
        },
        components: {
            CarCtrl
        },
        methods: {
            dlScroll () {
                const top = this.$refs.shopDl.scrollTop
                const tops = this.tops
                for (let i = 0; i < tops.length; i++) {
                    if (top >= tops[i] && top < tops[i + 1]) {
                        this.index = i
                    }
                }
            },
            turn (index) {
                this.index = index
                const top = this.tops[index] - this.tops[0]
                this.$refs.shopDl.scrollTop = top
            }
        },
        created () {
            for (let i of this.$store.state.shops) {
                if (+i.id === +this.$route.params.id) {
                    this.$store.state.showShop = i
                    this.$store.dispatch('getFoods')
                    return
                }
            }
        },
        mounted () {
            setTimeout(() => {
                const dls = this.$refs.shopDl.getElementsByClassName('shop_right_dl')
                const margin = dls[0].offsetTop
                let tops = []
                for (let i of dls) {
                    tops.push(i.offsetTop - margin)
                }
                tops.push(99999)
                this.tops = tops
            }, 1000)
        }
    }
</script>
<style lang="less">
    .shop_choose_top {
        padding-top: 20px;
        padding-bottom: 10px;
        .title {
            font-size: 16px;
            font-weight: 800;
            color: #000;
            margin-left: 18px;
        }
    }
    .shop_top_main {
        display: flex;
        flex-wrap: nowrap;
        overflow: auto;
        margin-top: 16px;
    }
    .shop_main_item {
        width: 132px;
        margin-left: 12px;
        margin-bottom: 14px;
        img {
            width: 132px;
            height: 132px;
            border-radius: 2px;
        }
        .name {
            margin-top: 10px;
            font-size: 14px;
            color: #333
        }
        .num {
            margin-top: 8px;
            font-size: 10px;
            color: #a3a3a3
        }
        .sale {
            overflow: hidden;
            margin-top: 12px;
            line-height: 20px;
            .left {
                float: left;
                font-size: 16px;
                color: #ff5339
            }
        }
        &:first-child {
            margin-left: 18px;
        }
        &:last-child {
            padding-right: 18px;
        }
    }
    .shop_choose_itme {
        display: flex;
        position: relative;
        max-height: 650px;
        overflow: hidden;
    }
    .shop_itme_left {
        overflow: auto;
        width: 86px;
        background-color: #f4f4f4;
        li {
            height: 56px;
            line-height: 56px;
            padding-left: 8px;
            img {
                width: 14px;
                height: 14px;
                margin-right: 2px;
                vertical-align: middle;
            }
            span {
                font-size: 12px;
                color: #666;
                vertical-align: middle;
            }
        }
        .on {
            background-color: #fff
        }
    }
    .shop_itme_right {
        overflow: auto;
        flex: 1;
        padding: 0 12px;
        padding-right: 4px;
    }
    .shop_right_dl {
        margin: 6px 0 12px;
    }
    .shop_right_dt {
        .left {
            font-size: 12px;
            color: #666;
            margin-left: 6px;
        }
        .right {
            font-size: 10px;
            color: #a3a3a3
        }
    }
    .shop_right_dd {
        margin-top: 22px;
        .log {
            float: left;
            margin-right: 14px;
            img {
                width: 104px;
                height: 104px;
            }
        }
    }
    .shop_dt_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 104px;
        h4 {
            font-size: 16px;
            font-weight: 800;
            color: #333
        }
    }
    .shop_info_num {
        margin-top: 12px;
        font-size: 10px;
        color: #a3a3a3;
        .left {
            margin-right: 4px;
        }
    }
    .shop_info_sale {
        margin-top: 8px;
        font-size: 10px;
        color: #eb6551;
        .left {
            display: inline-block;
            padding: 2px;
            margin-right: 2px;
            border: 1px solid #fce8e5
        }
    }
    .shop_dt_money {
        .money {
            float: left;
            .left {
                font-size: 12px;
                color: #ff5339
            }
            .mid {
                font-size: 16px;
                color: #ff5339;
                margin-left: -2px;
            }
            .right {
                font-size: 10px;
                color: #999;
                text-decoration: line-through;
                margin-left: 4px;
            }
        }
    }
</style>
