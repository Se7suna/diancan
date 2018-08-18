<template>
    <div class="carctrl">
        <i class="iconfont icon-jianhao"></i>
        <span>12</span>
        <i class="iconfont icon-iconfontadd"></i>
    </div>
</template>
<style lang="less">
    .carctrl {
        float: right;
        display: flex;
        align-items: center;
        i {
            width: 18px;
            height: 18px;
            line-height: 18px;
            font-size: 16px;
            color: #fff;
            text-align: center;
            border-radius: 50%
        }
        .icon-iconfontadd {
            font-size: 14px;
            color: #fff;
            background-color: #2395ff;
        }
        .icon-jianhao {
            box-sizing: border-box;
            font-size: 16px;
            color: #2395ff;
            border: 1px solid #2395ff;
        }
        span {
            font-size: 12px;
            margin: 0 10px
        }
    }
</style>
