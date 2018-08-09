<template>
    <div class="login">
        <div class="login_log">
            <img src="./img/logo_03.png">
        </div>
        <div class="login_main">
            <div class="login_main_choose">
                <router-link to="/login/phone" class="login_choose_phone" @click.native="isPhone = true" :class="isPhone ? 'show_blue' : ''">
                    短信登录
                </router-link>
                <router-link to="/login/pwd" class="login_choose_pwd" @click.native="isPhone = false" :class="isPhone ? '' : 'show_blue'">
                    密码登录
                </router-link>
            </div>
            <router-view class="login_main_input">
            </router-view>
            <p class="login_main_text">
                温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意
                <a href="#">《用户服务协议》</a>
            </p>
            <div class="login_main_button">
                <button class="login_main_yes">登录</button>
                <button class="login_main_no" @click="$router.replace('/profile')">取消</button>
            </div>
            <a href="#" class="login_main_us">关于我们</a>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isPhone: true
            }
        }
    }
</script>
<style lang="less">
    .login_log {
        height: 140px;
        text-align: center;
        img {
            margin-top: 40px
        }
    }
    .login_main_choose {
        width: 300px;
        text-align: center;
        margin: 0 auto
    }
    .login_choose_phone,
    .login_choose_pwd {
        display: inline-block;
        box-sizing: border-box;
        font-size: 14px;
        color: #999;
        padding-bottom: 6px;
        margin: 0 20px;
    }
    .login_main_input {
        width: 300px;
        margin: 16px auto 12px;
    }
    .login_main_text {
        width: 300px;
        line-height: 20px;
        font-size: 14px;
        color: #999;
        margin: 0 auto;
        a {
            color: #2395ff
        }
    }
    .login_main_button {
        width: 300px;
        text-align: center;
        margin: 40px auto 20px;
    }
    .login_main_yes {
        width: 300px;
        line-height: 44px;
        font-size: 16px;
        color: #fff;
        background-color: #4cd96f;
        border: 0;
        border-radius: 5px;
        margin-bottom: 16px;
    }
    .login_main_no {
        width: 300px;
        line-height: 44px;
        font-size: 16px;
        color: #fff;
        border: 0;
        border-radius: 5px;
        background-color: #f27474
    }
    .login_main_us {
        display: block;
        width: 50px;
        font-size: 12px;
        text-align: center;
        color: #9d9ea0;
        margin: 0 auto;
    }
    .login_main_choose .show_blue {
        color: #39a2ff;
        border-bottom: 2px solid #2395ff
    }
</style>
