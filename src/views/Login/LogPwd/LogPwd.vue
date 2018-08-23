<template>
    <form class="logpwd">
        <div class="logpwd_user">
            <label for="user">用户名</label>
            <input id="user" type="text" placeholder="用户名/手机/邮箱" v-model="id">
        </div>
        <div class="logpwd_pwd">
            <label for="pwd">密码&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input v-if="starOff" id="pwd" type="password" maxlength="16" v-model="pwd">
            <input v-else id="pwd" type="text" maxlength="16" v-model="pwd">
            <div class="logpwd_pwd_star" :class="{star_on: !starOff}" @click="starOff = !starOff">
                <span :class="starOff ? 'star_off' : 'star_on'"></span>
            </div>
        </div>
        <div class="logpwd_code">
            <label for="pwd_code">验证码</label>
            <input id="pwd_code" type="text" maxlength="6" v-model="code">
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
                id: '',
                pwd: '',
                code: '',
                starOff: true,
                imgUrl: '',
                regStr: ''
            }
        },
        methods: {
            imgFresh () {
                reqPwdImg().then(result => {
                    this.imgUrl = result.url
                    this.regStr = result.reg
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
            width: 20px;
            height: 20px;
            border: 1px solid #ddd;
            border-radius: 50%;
            transition: all .3s;
        }
    }
    .star_off {
        left: 0;
    }
    .star_on {
        border: 1px solid #2395ff
    }
    span.star_on {
        transform: translateX(30px);
        background-color: #2395ff;
        border: 1px solid #2395ff
    }
</style>
