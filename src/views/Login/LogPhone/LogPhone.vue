<template>
    <form class="logphone">
        <div class="logphone_phone">
            <label for="phone">手机号</label>
            <input id="phone" type="tel" maxlength="11">
            <a href="#">获取验证码</a>
        </div>
        <div class="logphone_code">
            <label for="phone_code">验证码</label>
            <input id="phone_code" type="text" maxlength="6">
        </div>
    </form>
</template>
<script>
</script>
<style lang="less">
    .logphone_phone,
    .logphone_code {
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
            width: 140px;
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
    .logphone_code {
        margin-top: 18px;
        input {
            width: 200px;
        }
    }
</style>
