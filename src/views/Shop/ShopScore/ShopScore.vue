<template>
    <div class="shop_score">
        <div class="shop_score_top">
            <div class="shop_top_left">
                <div class="shop_left_num">4.6</div>
                <div class="shop_left_star">
                    <p class="up">商家评分</p>
                    <Stars class="star" :num="4.6"/>
                </div>
            </div>
            <div class="shop_top_right">
                <div class="shop_right_wd">
                    <p class="up">味道</p>
                    <p class="down">4.4</p>
                </div>
                <div class="shop_right_bz">
                    <p class="up">包装</p>
                    <p class="down">4.4</p>
                </div>
                <div class="shop_right_ps">
                    <p class="up">配送</p>
                    <p class="down">4.3</p>
                </div>
            </div>
        </div>
        <div class="shop_score_label">
            <div class="shop_score_div">
                <span class="all">全部 813</span>
                <span class="yes">满意 746</span>
                <span class="no">不满意 26</span>
                <span class="yes">有图 53</span>
                <span class="yes">味道好 24</span>
            </div>
            <div class="shop_score_btn">
                <i class="iconfont icon-gouxuan check"></i>
                <span>只看有内容的评价</span>
            </div>
            <ul class="shop_score_text">
                <li class="shop_text_item">
                    <div class="shop_item_logo"></div>
                    <div class="shop_item_main">
                        <p class="top">匿名用户</p>
                        <p class="mid">
                            <Stars :num="1"/>
                            <a href="#">吐槽</a>
                        </p>
                        <p class="bot">服务非常差,拒绝再次使用</p>
                    </div>
                    <div class="shop_item_time">
                        <p>2018-08-01</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Stars from '../../../components/Stars/Stars.vue'
    export default {
        components: {
            Stars
        }
    }
</script>
<style lang="less">
    .shop_score {
        background-color: #f5f5f5
    }
    .shop_score_top {
        display: flex;
        justify-content: space-between;
        height: 106px;
        padding-left: 26px;
        background-color: #fff
    }
    .shop_top_left {
        display: flex;
        align-items: center;
        overflow: hidden;
        align-self: center;
    }
    .shop_left_num {
        font-size: 30px;
        color: #ff6000;
        margin-top: -6px;
    }
    .shop_left_star {
        margin-left: 20px;
        .up {
            font-size: 12px;
            color: #767676
        }
        .star {
            margin-top: 2px
        }
    }
    .shop_top_right {
        display: flex;
        align-self: center;
        .up {
            font-size: 12px;
            color: #767676
        }
        .down {
            margin-top: 12px;
            font-size: 16px;
            color: #666
        }

    }
    .shop_right_ps {
        padding: 0 32px;
        border-left: 1px solid #ddd
    }
    .shop_right_wd,
    .shop_right_bz {
        margin-right: 30px
    }
    .shop_score_label {
        padding: 8px 16px;
        margin-top: 8px;
        background-color: #fff;
    }
    .shop_score_div {
        display: flex;
        flex-wrap: wrap;
        span {
            font-size: 12px;
            margin-top: 8px;
            margin-right: 8px;
            padding: 8px 10px;
            border-radius: 2px;
        }
        .all {
            color: #fff;
            background-color: #0097ff
        }
        .yes {
            color: #798490;
            background-color: #ebf5ff
        }
        .no {
            color: #b2b2b2;
            background-color: #f5f5f5
        }
    }
    .shop_score_btn {
        margin-top: 16px;
        padding: 16px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        i {
            color: #b2b2b2;
            font-size: 18px
        }
        span {
            font-size: 14px;
            color: #666
        }
        .check {
            color: #76d572
        }
    }
    .shop_text_item {
        overflow: hidden;
        padding-top: 18px;
        padding-bottom: 18px;
        padding-left: 12px;
        border-bottom: 1px solid #eee;
    }
    .shop_item_logo {
        float: left;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: url('./img/ia_10002.png') no-repeat 0 -34px;
        background-size: 34px;
        margin-right: 12px
    }
    .shop_item_main {
        display: flex;
        flex-flow: column;
        float: left;
        .bot,
        .top {
            font-size: 14px;
            color: #333
        }
        .mid {
            display: flex;
            align-items: center;
            margin: 4px 0 6px;
            a {
                color: #8ea1bd;
                margin-left: 4px;
            }
        }
    }
    .shop_item_time {
        float: right;
        color: #999;
        font-size: 10px;
    }
</style>
