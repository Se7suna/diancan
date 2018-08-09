<template>
    <div class="shop_eval">
        <div class="shop_eval_top">
            <p class="top">配送信息</p>
            <p class="mid">由蜂鸟快送提供配送, 约33分钟送达, 距离1.1km</p>
            <p class="bot">配送费￥4.5</p>
        </div>
        <div class="shop_eval_item">
            <p class="shop_item_title">活动与服务</p>
            <ul class="shop_item_text">
                <li class="first">
                    <span class="left">首单</span>
                    <span class="right">新用户下单立减16元(不与其他活动共享)</span>
                </li>
                <li class="full">
                    <span class="left">满减</span>
                    <span class="right">满10减11, 满20减21, 满30减31, 满50减51</span>
                </li>
                <li class="normal">
                    <span class="left">特价</span>
                    <span class="right">单品定价</span>
                </li>
            </ul>
        </div>
        <div class="shop_eval_room">
            <p class="shop_room_title">商家实景</p>
            <ul>
                <li>
                    <img src="./img/ea129c491537ee69d6c35fcef3f94jpeg.jpeg">
                    <span>门面(1张)</span>
                </li>
                <li>
                    <img src="./img/0cb5ed7dd654711f6ab50ffe8ff37jpeg.jpeg">
                    <span>大堂(1张)</span>
                </li>
            </ul>
        </div>
         <div class="shop_eval_msg">
            <p>商家信息</p>
            <ul>
                <li class="top">
                    <span>暂无简介</span>
                </li>
                <li>
                    <span class="left">品类</span>
                    <span class="right">汉堡,炸鸡炸串</span>
                </li>
                <li>
                    <span class="left">商家电话</span>
                    <span class="right">023-86555697</span>
                </li>
                <li>
                    <span class="left">地址</span>
                    <span class="right">重庆市渝中区山益村1-5号二单元第一层2号</span>
                </li>
                <li>
                    <span class="left">营业时间</span>
                    <span class="right">09:00-03:30</span>
                </li>
            </ul>
        </div>
        <div class="shop_eval_zz">
            <span class="left">营业资质</span>
            <i class="iconfont icon-gengduo right"></i>
        </div>
    </div>
</template>
<script>
</script>
<style lang="less">
    .shoptitle() {
        font-size: 16px;
        font-weight: 800;
        color: #000;
    }
    .shop_eval {
        background-color: #f5f5f5
    }
    .shop_eval_top {
        font-size: 14px;
        color: #666;
        padding: 20px 18px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        .top {
            .shoptitle()
        }
        .mid {
            margin-top: 24px
        }
        .bot {
            margin-top: 12px
        }
    }
    .shop_eval_item {
        font-size: 14px;
        color: #666;
        margin-top: 12px;
        padding: 20px 18px;
        background-color: #fff;
    }
    .shop_item_title {
        .shoptitle()
    }
    .shop_item_text {
        margin-top: 24px;
        li {
            margin-top: 14px;
            .left {
                vertical-align: middle;
                display: inline-block;
                font-size: 12px;
                color: #fff;
                padding: 2px 4px;
                margin-left: 8px
            }
            .right {
                vertical-align: middle;
                font-size: 14px;
                color: #666
            }
        }
        .first .left {
            background-color: #70bc46
        }
        .full .left {
            background-color: #f07373
        }
        .normal .left {
            background-color: #f1884f;
        }
    }
    .shop_eval_room {
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        padding: 20px 18px;
        margin-top: 12px;
        li {
            position: relative;
            float: left;
            margin-top: 16px;
            margin-right: 8px;
            img {
                width: 86px;
                height: 86px;
            }
            span {
                display: inline-block;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 86px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                font-size: 14px;
                color: #fff;
                background-color: rgba(00, 00, 00, 0.5)
            }
        }
    }
    .shop_room_title {
        .shoptitle()
    }
    .shop_eval_msg {
        font-size: 14px;
        color: #666;
        margin-top: 12px;
        padding: 20px 18px 0;
        background-color: #fff;
        p {
            .shoptitle()
        }
        ul {
            margin-top: 6px;
            li {
                overflow: hidden;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                border-top: 1px solid #ddd
            }
        }
        .left {
            float: left;
            color: #333;
            font-weight: 800
        }
        .right {
            float: right;
            color: #666
        }
        .top {
            border-top: 0
        }
    }
    .shop_eval_zz {
        overflow: hidden;
        margin-top: 12px;
        padding: 22px 18px;
        background-color: #fff;
        .left {
            float: left;
            .shoptitle()
        }
        .right {
            float: right
        }
    }
</style>
