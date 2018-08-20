<template>
    <form class="logphone">
        <div class="logphone_phone">
            <label>
                手机号
                <input id="phone" v-model="$store.state.user.phone" type="tel" maxlength="11">
            </label>
            <button :disabled="pass" @click="phoneMsg()">{{showMsg}}</button>
        </div>
        <div class="logphone_code">
            <label>
                验证码
                <input id="phone_code" type="text" v-model="$store.state.user.code" maxlength="6">
            </label>
        </div>
    </form>
</template>
<script>
    export default {
        data () {
            return {
                flag: true,
                showMsg: '获取验证码'
            }
        },
        methods: {
            phoneMsg () {
                alert('验证码发送成功! 由于没有后台发送验证码,使用 1234 进行登录测试')
                this.flag = false
                let time = 30
                const id = setInterval(() => {
                    this.showMsg = `重新发送(${time--}s)`
                }, 1000)
                setTimeout(() => {
                    clearInterval(id)
                    this.flag = true
                    this.showMsg = '获取验证码'
                }, 30500)
                return false
            }
        },
        computed: {
            pass () {
                if (this.flag) {
                    return !this.$store.getters.phoneExp
                } else {
                    return true
                }
            }
        }
    }
</script>
<style lang="less">
    .logphone_phone,
    .logphone_code {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        line-height: 48px;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 14px;
        color: #ccc;
        label {
            margin-left: 12px;
        }
        input {
            width: 110px;
            font-size: 14px;
            color: #ccc;
            letter-spacing: 1px;
            margin-left: 4px;
            border: 0
        }
        button {
            // float: right;
            width: 106px;
            color: #333;
            background-color: #fff;
            border: 0;
            &:disabled {
                color: #ccc;
            }
        }
    }
    .logphone_code {
        margin-top: 18px;
        input {
            width: 200px;
        }
    }
</style>
