<template>
    <form class="logpwd">
        <div class="logpwd_user">
            <label for="user">用户名</label>
            <input id="user" type="text" placeholder="用户名/手机/邮箱">
        </div>
        <div class="logpwd_pwd">
            <label for="pwd">密码&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input v-if="starOff" id="pwd" type="password" maxlength="16">
            <input v-else id="pwd" type="text" maxlength="16">
            <div class="logpwd_pwd_star" :class="starOff ? '' : 'star_on'" @click="starOff = !starOff">
                <span :class="starOff ? 'star_off' : 'star_on'"></span>
            </div>
        </div>
        <div class="logpwd_code">
            <label for="pwd_code">验证码</label>
            <input id="pwd_code" type="text" maxlength="6">
            <img class="logpwd_code_img" :src="imgUrl" @click="imgFresh()">
        </div>
    </form>
</template>
<script>
    import {reqPwdImg} from '../../../api'
    export default {
        mounted () {
            reqPwdImg().then(result => {
                this.imgUrl = result.url
            })
        },
        data () {
            return {
                starOff: true,
                imgUrl: ''
            }
        },
        methods: {
            imgFresh () {
                reqPwdImg().then(result => {
                    this.imgUrl = result.url
                })
            }
        }
    }
</script>
<style lang="less">
    .logpwd_user,
    .logpwd_pwd,
    .logpwd_code {
        height: 48px;
        line-height: 48px;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 14px;
        color: #ccc;
        label {
            margin: 0 12px;
        }
        input {
            width: 200px;
            font-size: 14px;
            color: #ccc;
            letter-spacing: 1px;
            border: 0
        }
        a {
            float: right;
            margin-right: 12px;
            color: #ccc
        }
    }
    .logpwd_pwd,
    .logpwd_code {
            margin-top: 18px;
            input {
                width: 140px;
            }
    }
    .logpwd_code_img{
        float: right;
        width: 70px;
        height: 30px;
        margin-top: 10px;
        margin-right: 10px;
        border-radius: 5px
    }
    .logpwd_pwd_star {
        display: inline-flex;
        vertical-align: middle;
        width: 50px;
        height: 20px;
        margin-left: 15px;
        border: 1px solid #ddd;
        border-radius: 20px;
        span {
            align-self: center;
            position: relative;
            width: 20px;
            height: 20px;
            top: 0;
            border: 1px solid #ddd;
            border-radius: 50%
        }
    }
    .star_off {
        left: 0;
    }
    .star_on {
        border: 1px solid #2395ff
    }
    span.star_on {
        left: 30px;
        background-color: #2395ff;
        border: 1px solid #2395ff
    }
</style>
