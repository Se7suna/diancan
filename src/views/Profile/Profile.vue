<template>
    <div class="profile">
        <HeaderTop :title="'我的'">
            <i slot="left" class="iconfont icon-fanhui header-left" @click="$router.back()"></i>
        </HeaderTop>
        <div class="profile_login" @click="$router.push('/login')">
            <div class="profile_login_left">
                <div class="profile_left_log"></div>
                <div class="profile_left_btn">
                    <div class="profile_btn_in">
                        登录/注册
                    </div>
                    <div class="profile_btn_more">
                        <i class="iconfont icon-asmkticon0113"></i>
                        登录后享受更多特权
                    </div>
                </div>
            </div>
            <div class="profile_login_right">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
        <div class="profile_purse">
            <div class="profile_purse_money">
                <div class="profile_money_img">
                    <i class="iconfont icon-qian"></i>
                </div>
                <p>钱包</p>
            </div>
            <div class="profile_purse_red">
                <div class="profile_red_img">
                    <i class="iconfont icon-hongbao"></i>
                </div>
                <p>红包</p>
            </div>
            <div class="profile_purse_gold">
                <div class="profile_gold_img">
                    <i class="iconfont icon-jinbi"></i>
                </div>
                <p>金币</p>
            </div>
        </div>
        <ul class="profile_option">
            <li class="profile_option_item">
                <div  class="profile_item_address">
                    <i class="iconfont icon-location left"></i>
                    <span>我的地址</span>
                    <i class="iconfont icon-gengduo right"></i>
                </div>
            </li>
            <li class="profile_option_item">
                <div  class="profile_item_shop">
                    <i class="iconfont icon-shangcheng left"></i>
                    <span>金币商城</span>
                    <i class="iconfont icon-gengduo right"></i>
                </div>
                <div  class="profile_item_share">
                    <i class="iconfont icon-libao left"></i>
                    <span>分享拿5元现金</span>
                    <i class="iconfont icon-gengduo right"></i>
                </div>
            </li>
            <li class="profile_option_item">
                <div  class="profile_item_server">
                    <i class="iconfont icon-kefu left"></i>
                    <span>我的客服</span>
                    <i class="iconfont icon-gengduo right"></i>
                </div>
                <div  class="profile_item_app">
                    <i class="iconfont icon-app left"></i>
                    <span>下载手机APP</span>
                    <i class="iconfont icon-gengduo right"></i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        components: {
            HeaderTop
        }
    }
</script>
<style lang="less">
    .profile {
        background-color: #f5f5f5
    }
    .profile_login {
        display: flex;
        justify-content: space-between;
        height: 113px;
        color: #fff;
        background-color: #0090ff
    }
    .profile_login_left {
        display: flex;
    }
    .profile_left_log {
        align-self: center;
        width: 67px;
        height: 67px;
        background: url("./img/sprite.3ffb5d8.png") no-repeat 0 -67px;
        background-size: 67px;
        border-radius: 50%;
        margin-left: 16px;
        margin-right: 20px
    }
    .profile_left_btn {
        align-self: center;
    }
    .profile_btn_in {
        font-size: 20px;
        font-weight: 800
    }
    .profile_btn_more {
        font-size: 12px;
        margin-top: 14px;
        i {
            font-size: 14px
        }
    }
    .profile_login_right {
        align-self: center;
        margin-right: 20px
    }
    .profile_purse {
        display: flex;
        height: 92px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        p {
            color: #666;
            font-size: 12px;
            margin-top: 10px
        }
    }
    .profile_purse_money,
    .profile_purse_red,
    .profile_purse_gold {
        flex: 1;
        height: 100%;
        text-align: center
    }
    .profile_purse_red {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }
    .profile_money_img,
    .profile_red_img,
    .profile_gold_img {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        margin: 20px auto 0;
        i {
            font-size: 18px;
            color: #fff
        }
    }
    .profile_money_img {
        background-color: #ff9900
    }
    .profile_red_img {
        background-color: #ff5f3e
    }
    .profile_gold_img {
        background-color: #6ac20b
    }
    .profile_option_item {
        margin-top: 12px;
        div {
            padding: 16px;
            background-color: #fff;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            margin-top: -1px;
            .left {
                font-size: 16px;
                margin-right: 12px
            }
            span {
                font-size: 16px;
                color: #333;
            }
            .right {
                float: right;
                line-height: 16px;
                font-size: 14px;
                color: #bfbfbf
            }
        }
    }
    .profile_item_address {
        .left {
            color: #4aa5f0;
        }
    }
    .profile_item_shop {
        .left {
            color: #94d94a;
        }
    }
    .profile_item_share {
        .left {
            color: #fc7b53;
        }
    }
    .profile_item_server {
        .left {
            color: #4da6f0;
        }
    }
    .profile_item_app {
        .left {
            color: #3cabff;
        }
    }
</style>
