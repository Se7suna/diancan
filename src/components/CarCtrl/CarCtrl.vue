<template>
    <div class="carctrl">
        <i class="iconfont icon-jianhao" v-show="buy" @click.stop="adFood(false)"></i>
        <span v-show="buy">{{buy}}</span>
        <i class="iconfont icon-iconfontadd" @click.stop="adFood(true)"></i>
    </div>
</template>
<script>
    export default {
        props: {
            foodId: Number,
            buy: Number
        },
        methods: {
            adFood (isAdd) {
                this.$store.dispatch('carAd', {isAdd, foodId: this.foodId})
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
