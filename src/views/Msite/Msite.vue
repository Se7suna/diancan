<template>
    <div class="msite">
        <HeaderTop :title="title">
            <span slot="left" class="msite-header-left"><i class="iconfont icon-dingwei"></i></span>
            <span slot="right" class="msite-header-right">登录</span>
        </HeaderTop>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <ul class="msite-ad">
                        <li class="msite-ad-item">
                            <img src="./img/a867c870b22bc74c87c348b75528djpeg.jpeg" alt="美食">
                            <p>美食</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/76a23eb90dada42528bc41499d6f8jpeg.jpeg" alt="商超便利">
                            <p>商超便利</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/60ac33f023d9074e13cd78f9b5964jpeg.jpeg" alt="午餐">
                            <p>午餐</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg" alt="果蔬生鲜">
                            <p>果蔬生鲜</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/af108e256ebc9f02db599592ae655jpeg.jpeg" alt="医药健康">
                            <p>医药健康</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/b02bd836411c016935d258b300cfejpeg.jpeg" alt="大牌5折">
                            <p>大牌5折</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg" alt="浪漫鲜花">
                            <p>浪漫鲜花</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg" alt="麻辣烫">
                            <p>麻辣烫</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg" alt="地方菜系">
                            <p>地方菜系</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/235761e50d391445f021922b71789jpeg.jpeg" alt="披萨意面">
                            <p>披萨意面</p>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul class="msite-ad">
                        <li class="msite-ad-item">
                            <img src="./img/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg" alt="美食">
                            <p>美食</p>
                        </li>
                        <li class="msite-ad-item">
                            <img src="./img/6f2631288a44ec177204e05cbcb93jpeg.jpeg" alt="商超便利">
                            <p>商超便利</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="msite-ad clearfix">
            <div class="msite-ad-left">
                <h4>品质套餐</h4>
                <p>搭配齐全吃得好</p>
                <a href="">立即抢购 &gt;</a>
                <img src="./img/16ff085900d62b8d60fa7e9c6b65dpng.png">
            </div>
            <div class="msite-ad-right">
                <h4>限量抢购</h4>
                <p>超值美味 9.9元起</p>
                <a href=""><span>409人</span>正在抢 &gt;</a>
                <img src="./img/0fa0ed514c093a7138b0b9a50d61fpng.png">
            </div>
        </div>
        <div class="msite-shop">
            <div class="msite-shop-top">
                <p>
                    <i class="iconfont icon-hengxian"></i>
                    <span>推荐商家</span>
                    <i class="iconfont icon-hengxian"></i>
                </p>
                <div class="msite-top-main">
                    <span>综合排序<i class="iconfont icon-sort-small-copy-copy"></i></span>
                    <span>好评优先</span>
                    <span>距离最近</span>
                    <span>筛选<i class="iconfont icon-shaixuan"></i></span>
                </div>
            </div>
            <ShopList/>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import ShopList from '../../components/ShopList/ShopList.vue'
    export default {
        data () {
            return {
                title: '重庆市南岸区'
            }
        },
        mounted () {
            new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        },
        components: {
            HeaderTop,
            ShopList
        }
    }
</script>
<style lang="less">
    @import "http://at.alicdn.com/t/font_762088_etser0pus7e.css";
    .clearfix {
        *zoom: 1;
        &:before,
        &:after {
            content: "";
            display: table;
            line-height: 0;
        }
        &:after {
            clear: both;
        }
    }
    .ad-item() {
        position: relative;
        width: 168px;
        height: 138px;
        padding-top: 16px;
        padding-left: 18px;
        background-color: #f8f8f8;
        h4 {
            font-size: 18px;
            margin-bottom: 10px
        };
        p {
            font-size: 12px;
            color: #777;
            margin-bottom: 14px
        }
        a {
            font-size: 12px;
        }
        img {
            position: absolute;
            right: 2px;
            bottom: -8px;
            width: 130px;
            height: 73px;
        }
    }
    .swiper-container {
        width: 100%;
        height: 194px;
    }
    .msite-ad{
        padding: 0 15px;
    }
    .msite-ad-item {
        width: 20%;
        height: 50%;
        float: left;
        text-align: center;
        img {
            width: 50px;
            height: 50px;
            margin-top: 15px
        }
        p {
            color: #666;
            font-size: 12px;
            margin: 0 auto
        }
    }
    .swiper-pagination-bullet-active {
        background-color: #666
    }
    .swiper-pagination-bullet {
        background-color: #ccc
    }
    .msite-header-left i {
        float: left;
        margin-left: 16px;
        font-size: 22px;
    }
    .msite-header-right {
        float: right;
        margin-right: 16px;
        font-size: 16px;
    }
    .msite-ad-left {
        .ad-item();
        float: left;
        h4 {
            font-weight: 800;
            color: #333;
        }
        a {
            color: #af8260
        }
    }
    .msite-ad-right {
        .ad-item();
        float: right;
        h4 {
            font-weight: 800;
            color: #e93838
        }
        a {
            color: #333;
            span {
                color : #e93838
            }
        }
    }
    .msite-shop-top {
        width: 100%;
        p {
            width: 142px;
            line-height: 25px;
            font-size: 16px;
            color: #1d0000;
            text-align: center;
            margin: 20px auto 24px;
            i {
                color: #999;
                font-size: 20px;
                &:first-child {
                    float: left
                }
                &:last-child {
                    float: right
                }
            }
        }
    }
    .msite-top-main {
        display: flex;
        height: 30px;
        text-align: center;
        span {
            flex: 1;
            color: #666;
            i {
                margin-left: 3px
            }
        }
    }
</style>
