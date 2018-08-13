<template>
    <div class="shop_choose">
        <div class="shop_choose_top">
            <p class="title">商家推荐</p>
            <ul class="shop_top_main">
                <li class="shop_main_item">
                    <img src="./img/c060f79c5206215e5657bab74fb1djpeg.jpeg">
                    <p class="name">玉米如意棒 (两根)</p>
                    <p class="num">月售1 好评率0%</p>
                    <div class="sale">
                        <span class="left">￥3.9</span>
                        <i class="iconfont icon-ic_join_dialing_norm right"></i>
                    </div>
                </li>
                <li class="shop_main_item">
                    <img src="./img/c060f79c5206215e5657bab74fb1djpeg.jpeg">
                    <p class="name">玉米如意棒 (两根)</p>
                    <p class="num">月售1 好评率0%</p>
                    <div class="sale">
                        <span class="left">￥3.9</span>
                        <i class="iconfont icon-ic_join_dialing_norm right"></i>
                    </div>
                </li>
                <li class="shop_main_item">
                    <img src="./img/c060f79c5206215e5657bab74fb1djpeg.jpeg">
                    <p class="name">玉米如意棒 (两根)</p>
                    <p class="num">月售1 好评率0%</p>
                    <div class="sale">
                        <span class="left">￥3.9</span>
                        <i class="iconfont icon-ic_join_dialing_norm right"></i>
                    </div>
                </li>
                <li class="shop_main_item">
                    <img src="./img/c060f79c5206215e5657bab74fb1djpeg.jpeg">
                    <p class="name">玉米如意棒 (两根)</p>
                    <p class="num">月售1 好评率0%</p>
                    <div class="sale">
                        <span class="left">￥3.9</span>
                        <i class="iconfont icon-ic_join_dialing_norm right"></i>
                    </div>
                </li>
                <li class="shop_main_item">
                    <img src="./img/c060f79c5206215e5657bab74fb1djpeg.jpeg">
                    <p class="name">玉米如意棒 (两根)</p>
                    <p class="num">月售1 好评率0%</p>
                    <div class="sale">
                        <span class="left">￥3.9</span>
                        <i class="iconfont icon-ic_join_dialing_norm right"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shop_choose_itme">
            <ul class="shop_itme_left">
                <li :class="{on: 0 === index}" @click="turn(0)">
                    <img src="./img/ia_10125.png">
                    <span>热销</span>
                </li>
                <li :class="{on: 1 === index}" @click="turn(1)">
                    <img src="./img/ia_10125.png">
                    <span>火爆</span>
                </li>
            </ul>
            <div class="shop_itme_right" ref="shopDl" @scroll="dlScroll">
                <dl class="shop_right_dl">
                    <dt class="shop_right_dt">
                        <span class="left">热销</span>
                        <span class="right">大家喜欢吃,才叫真好吃</span>
                    </dt>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                </dl>
                <dl class="shop_right_dl">
                    <dt class="shop_right_dt">
                        <span class="left">热销2</span>
                        <span class="right">大家喜欢吃,才叫真好吃</span>
                    </dt>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (4块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                    <dd class="shop_right_dd">
                        <div class="log">
                            <img src="./img/d21f102a9934a8e4b0fa87b46bb02jpeg.jpeg">
                        </div>
                        <div class="shop_dt_info">
                            <div class="top">
                                <h4>黑椒鸡块 (2块)</h4>
                                <p class="shop_info_num">
                                    <span class="left">月售261份</span>
                                    <span class="right">好评率100%</span>
                                </p>
                                <p class="shop_info_sale">
                                    <span class="left">3.7折</span>
                                    <span class="right">每单限1份优惠</span>
                                </p>
                            </div>
                            <div class="shop_dt_money clearfix">
                                <div>
                                    <span class="left">￥</span>
                                    <span class="mid">2.66</span>
                                    <span class="right">4.66</span>
                                </div>
                                <i class="iconfont icon-ic_join_dialing_norm"></i>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                index: 0,
                tops: []
            }
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
                console.log(tops)
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
            .right {
                float: right;
                width: 20px;
                height: 20px;
                line-height: 22px;
                text-align: center;
                font-size: 16px;
                border-radius: 50%;
                color: #fff;
                background-color: #2395ff;
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
            background-color: pink
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
        // position: absolute;
        // bottom: 0;
        // left: 118px;
        div {
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
        i {
            float: right;
            width: 22px;
            height: 22px;
            line-height: 24px;
            text-align: center;
            font-size: 20px;
            color: #fff;
            background-color: #2395ff;
            border-radius: 50%;
        }
    }
</style>
