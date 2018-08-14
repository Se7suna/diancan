<template>
    <ul>
        <li class="msite-shop-item" v-for="item  of shopSort" :key="item.id" @click="turn(item.id)">
            <div class="msite-item-logo">
                <img :src="item.logo">
            </div>
            <div class="msite-item-info">
                <h4 class="msite-info-name">
                    <span class="left">{{item.info.top.left}}</span>
                    {{item.name}}
                    <span class="right">{{item.info.top.right}}</span>
                </h4>
                <div class="msite-info-sale">
                    <Stars class="star" :num="item.info.sale.score"/>
                    <span class="num">{{item.info.sale.score}}</span>
                    <span class="mon">月售{{item.info.sale.num}}单</span>
                </div>
                <div class="msite-info-send">
                    <span class="left">
                        <span>￥{{item.info.cost.start}}起送</span>
                        <span class="bor"></span>
                        <span>配送费￥{{item.info.cost.money}}</span>
                    </span>
                    <span class="right">
                        <span>{{item.info.cost.far}}m</span>
                        <span class="bor"></span>
                        <span>{{item.info.cost.time}}分钟</span>
                    </span>
                </div>
                <div class="msite-info-pref">
                    <div class="new">
                        <span class="left">
                            <span class="shou">首</span>
                            <span class="xin">{{item.info.ad.shou}}</span>
                        </span>
                        <span class="right">
                            {{item.info.ad.orther.length + 2}}个活动
                            <i class="iconfont icon-sort-small-copy-copy"></i>
                        </span>
                    </div>
                    <div class="less">
                        <span class="jian">减</span>
                        <span class="man">{{item.info.ad.jian}}</span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
    import Stars from '../../../components/Stars/Stars.vue'
    export default {
        components: {
            Stars
        },
        computed: {
            shopSort () {
                return this.$store.state.shops
            }
        },
        methods: {
            turn (id) {
                for (let i of this.$store.state.shops) {
                    if (i.id === id) {
                        this.$store.state.showShop = i
                    }
                }
                this.$router.push('/shop/' + id)
            }
        }
    }
</script>
<style lang="less">
    .color-box() {
        float: left;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        border-radius: 3px;
        margin-right: 8px;
    }
    .pref-ad() {
        float: left;
        line-height: 16px;
        font-size: 12px;
        color: #666
    }
    .msite-shop-item {
        padding: 20px 15px;
        border-top: 1px solid #ddd;
    }
    .msite-item-logo {
        float: left;
        width: 85px;
        img {
            width: 72px;
            height: 72px;
            border: 1px solid #ebebeb;
        }
    }
    .msite-item-info {
        overflow: hidden;
    }
    .msite-info-name {
        font-size: 18px;
        font-weight: 800;
        color: #333;
        margin-top: 3px;
        .left {
            float: left;
            width: 30px;
            height: 18px;
            text-align: center;
            line-height: 18px;
            font-size: 12px;
            color: #6f3f15;
            border-radius: 3px;
            margin-right: 8px;
            background-color: #fff006
        }
        .right {
            float: right;
            width: 14px;
            height: 14px;
            line-height: 14px;
            text-align: center;
            font-size: 10px;
            color: #999;
            border: 1px solid #eee
        }
    }
    .msite-info-sale {
        display: flex;
        align-items: center;
        height: 22px;
        font-size: 12px;
        color: #666;
        margin-top: 12px;
        .star {
            margin-right: 6px
        }
        .num,
        .mon {
            line-height: 22px;
            margin-right: 10px;
        }
    }
    .msite-info-send {
        height: 12px;
        font-size: 12px;
        color: #666;
        margin-top: 6px;
        .left {
            float: left;
        }
        .right {
            float: right;
            color: #999;
        }
        .bor {
            display: inline-block;
            height: 10px;
            margin: 0 10px;
            border-right: 1px solid #999;
        }
    }
    .msite-info-pref {
        .new {
            margin-top: 10px;
            height: 16px;
        }
        .left {
            .shou {
                .color-box();
                background-color: #70bc46;
            }
            .xin {
                .pref-ad()
            }
        }
        .right {
            float: right;
            height: 16px;
            font-size: 10px;
            line-height: 16px;
            color: #ababca;
            i {
                margin-left: 5px
            }
        }
        .less {
            height: 16px;
            margin-top: 10px;
            .jian {
                .color-box();
                background-color: #f07373;
            }
            .man {
                .pref-ad();
                max-width: 180px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>
