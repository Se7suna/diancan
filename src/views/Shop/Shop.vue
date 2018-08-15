<template>
    <div class="shop">
        <div class="shop_top">
            <i class="iconfont icon-fanhui"  @click="$router.push('/msite')"></i>
            <div class="shop_top_log">
                <img :src="this.$store.state.showShop.logo">
            </div>
        </div>
        <div class="shop_title">
            <h4 class="shop_title_name">{{this.$store.state.showShop.name}}</h4>
            <div class="shop_title_small">
                <span class="left">评价{{this.$store.state.showShop.info.sale.score}}</span>
                <span class="mid">月售{{this.$store.state.showShop.info.sale.num}}单</span>
                <span class="right">蜂鸟快送约{{this.$store.state.showShop.info.cost.time}}分钟</span>
            </div>
            <div class="shop_title_sales">
                <div class="left">
                    <span class="title">满减</span>
                    <span class="main">{{this.$store.state.showShop.info.ad.jian}}</span>
                </div>
                <div class="right">
                    <span>{{this.$store.state.showShop.info.ad.orther.length + 2}}个优惠</span>
                    <i class="iconfont icon-sort-small-copy-copy"></i>
                </div>
            </div>
            <div class="shop_title_ad">
                <span class="left">公告:</span>
                <span class="right">{{this.$store.state.showShop.info.ad.gg}}</span>
            </div>
            <div class="shop_title_link">
                <div class="left" @click="$router.replace('/shop/' + $route.params.id + '/choose')" :class="{on: $route.path === '/shop/choose'}">点餐</div>
                <div class="mid" @click="$router.replace('/shop/' + $route.params.id + '/score')" :class="{on: $route.path === '/shop/score'}">评价</div>
                <div class="right" @click="$router.replace('/shop/' + $route.params.id + '/eval')" :class="{on: $route.path === '/shop/eval'}">商家</div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted () {
            if (!this.$store.state.showShop.id) {
                setTimeout(() => {
                    let id = +this.$route.params.id
                    for (let i of this.$store.state.shops) {
                        if (i.id === id) {
                            this.$store.state.showShop = i
                        }
                    }
                this.$store.dispatch('getFoods')
                }, 1000)
            }
        }
    }
</script>
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
        font-size: 22px;
        font-weight: 800;
        color: #333;
        margin-top: 38px;
        text-align: center;
    }
    .shop_title_small {
        color: #767676;
        text-align: center;
        margin-top: 10px;
        .left {
            font-size: 12px;
        }
        .mid {
            font-size: 12px;
            margin: 0 12px;
        }
        .right {
            font-size: 12px;
        }
    }
    .shop_title_sales {
        display: flex;
        align-items: center;
        width: 330px;
        margin: 16px auto 0;
        .left {
            .title {
                display: inline-block;
                color: #fff;
                padding: 3px 5px;
                border-radius: 2px;
                background-color: #f07373
            }
            .main {
                line-height: 18px;
                max-width: 210px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #4d4d4d;
                margin: 0 8px;
            }
        }
        .right {
            color: #a2a2a0;
            span {
                line-height: 18px;
            }
            i {
                margin-left: 2px;
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
