<template>
    <div class="carctrl">
        <i class="iconfont icon-jianhao" v-show="buy" @click="delFood()"></i>
        <span v-show="buy">{{buy}}</span>
        <i class="iconfont icon-iconfontadd" @click="addFood()"></i>
    </div>
</template>
<script>
    export default {
        props: {
            food: String,
            money: Number,
            buy: Number
        },
        methods: {
            addFood () {
                let obj = {
                    name: this.food,
                    money: this.money,
                    buy: this.buy
                }
                this.$store.dispatch('car', obj)
            },
            delFood () {
            }
        }
    }
</script>
<style lang="less">
    .carctrl {
        float: right;
        display: flex;
        align-items: center;
        i {
            width: 18px;
            height: 18px;
            line-height: 18px;
            font-size: 16px;
            color: #fff;
            text-align: center;
            border-radius: 50%
        }
        .icon-iconfontadd {
            font-size: 14px;
            color: #fff;
            background-color: #2395ff;
        }
        .icon-jianhao {
            box-sizing: border-box;
            font-size: 16px;
            color: #2395ff;
            border: 1px solid #2395ff;
        }
        span {
            width: 20px;
            text-align: center;
            font-size: 12px;
            margin: 0 8px
        }
    }
</style>
