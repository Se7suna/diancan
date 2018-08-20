<template>
    <div class="shopcar" v-if="$store.state.showShop.name">
        <div class="shopcar_top">
            <span>
                {{$store.state.showShop.info.ad.jian}}
            </span>
        </div>
        <div class="shopcar_main" v-if="show && car.length">
            <div class="shopcar_main_top">
                <div class="left">已选商品</div>
                <div class="right">
                    <i class="iconfont icon-huishouzhan"></i>
                    <span @click="clearCar">清空</span>
                </div>
            </div>
            <ul class="shopcar_main_list">
                <li class="shopcar_main_item" v-for="item of car" :key="item.id">
                    <div class="left">
                        <span class="item">{{item.name}}</span>
                        <span class="money">￥{{item.now * item.buy}}</span>
                    </div>
                    <CarCtrl :foodId="item.id" :buy="item.buy"/>
                </li>
            </ul>
        </div>
        <div class="shopcar_bot clearfix" @click="toggleCar()">
            <div class="left" :class="{haveBgc: car.length}">
                <i class="iconfont icon-gouwuche1" :class="{haveCor: car.length}"></i>
                <span>{{car.length}}</span>
            </div>
            <div class="mid">
                <p class="top">
                    <span class="new" v-if="moneyNow">
                        ￥{{moneyNow}}
                    </span>
                    <span class="old" v-if="moneyNow">
                        ￥{{moneyOld}}
                    </span>
                    <span v-else>
                        未选购商品
                    </span>
                </p>
                <p class="bot">另需配送费{{$store.state.showShop.info.cost.money}}元</p>
            </div>
            <div class="right" :class="{full: moneyNow > $store.state.showShop.info.cost.start}" @click.stop="pay()">
                <span>{{moneyNow > $store.state.showShop.info.cost.start ? '去结算' : `￥${$store.state.showShop.info.cost.start}起送`}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import CarCtrl from '../CarCtrl/CarCtrl.vue'
    export default {
        data () {
            return {
                show: false
            }
        },
        computed: {
            car () {
                let res = []
                if (this.$store.state.showShop.food) {
                    for (let i of this.$store.state.showShop.food) {
                        for (let food of i.foods) {
                            if (food.buy > 0) {
                                res.push(food)
                            }
                        }
                    }
                }
                return res
            },
            moneyNow () {
                let res = 0
                for (let i of this.car) {
                    res += i.now * i.buy
                }
                res = +res.toFixed(2)
                return res
            },
            moneyOld () {
                let res = 0
                for (let i of this.car) {
                    res += i.before * i.buy
                }
                res = +res.toFixed(2)
                return res
            }
        },
        methods: {
            toggleCar () {
                if (this.car.length) {
                    this.show = !this.show
                }
            },
            clearCar () {
                this.show = false
                this.$store.dispatch('clearCar')
            },
            pay () {
                if (this.moneyNow > this.$store.state.showShop.info.cost.start) {
                    console.log('结算页面未完工~')
                }
            }
        },
        components: {
            CarCtrl
        },
        watch: {
            'car': function () {
                if (this.car.length === 0) {
                    this.show = false
                }
            }
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
                width: 18px;
                height: 18px;
                line-height: 18px;
                text-align: center;
                color: #fff;
                right: -6px;
                top: -8px;
                font-size: 10px;
                background-color: #ff5415;
                border-radius: 50%
            }
        }
        .mid {
            display: flex;
            flex-flow: column;
            justify-content: center;
            float: left;
            height: 56px;
            color: #999;
            margin-left: 20px;
            .top {
                font-size: 14px;
            }
            .bot {
                font-size: 12px;
                margin-top: 4px;
            }
            .new {
                color: #fff;
                font-size: 18px;
            }
            .old {
                font-size: 12px;
                text-decoration: line-through
            }
        }
        .right {
            float: right;
            height: 100%;
            font-size: 16px;
            font-weight: 800;
            color: #fff;
            background-color: #535356;
            padding: 21px 28px;
            margin-right: -1px;
            margin-bottom: -1px;
        }
        .full {
            background-color: #38ca73
        }
        .haveBgc {
            background-color: #3190e8
        }
        i.haveCor{
            color: #fff;
        }
    }
</style>
