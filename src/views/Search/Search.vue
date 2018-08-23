<template>
    <div class="search">
        <HeaderTop :title="'搜索'"/>
        <div class="search_top">
            <div class="search_top_input">
                <i class="iconfont icon-icon-"></i>
                <input type="text" placeholder="输入商家、商品名称" v-model="search">
            </div>
            <div class="left" @click="$router.back()">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <div class="right">
                <span>搜索</span>
            </div>
        </div>
        <div class="search_main" v-if="!search">
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
        <ul class="search_item" v-else>
            <li v-for="item of show" :key="item.id" @click="turn (item.id)">
                <div class="left">
                    <img :src="item.logo">
                </div>
                <div class="right">
                    <div>
                        <span class="name">{{item.name}}</span>
                        <span class="jian" v-if="item.info.ad.jian">减</span>
                        <span class="niao" v-if="item.info.sale.num % 3 === 1">蜂鸟</span>
                    </div>
                    <span class="ping">评价{{item.info.sale.score}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        data () {
            return {
                search: ''
            }
        },
        methods: {
            turn (id) {
                this.$router.push('/shop/' + id)
            }
        },
        components: {
            HeaderTop
        },
        computed: {
            show () {
                let arr = []
                let shops = this.$store.state.shops
                if (this.search) {
                    for (let i of shops) {
                        if (i.name.indexOf(this.search) >= 0) {
                            arr.push(i)
                        }
                    }
                }
                return arr
            }
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
    .search_item {
        margin-top: -12px;
        li {
            display: flex;
            align-items: center;
        }
        .left {
            padding: 0 18px;
            img {
                width: 28px;
                height: 28px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 1;
            padding: 22px 0;
            margin-right: 18px;
            border-bottom: 1px solid #e3e3e3;
            div {
                display: flex;
                align-items: center;
            }
        }
        .name {
            font-size: 14px;
            color: #333;
            margin-right: 8px;
        }
        .jian {
            font-size: 10px;
            color: #fff;
            padding: 1px 2px;
            margin-right: 8px;
            background-color: #fa7047
        }
        .niao {
            font-size: 10px;
            color: #fff;
            padding: 1px 2px;
            margin-right: 8px;
            background-color: #2395ff
        }
    }
</style>
