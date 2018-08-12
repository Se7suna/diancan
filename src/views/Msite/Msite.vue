<template>
    <div class="msite">
        <HeaderTop :title="$store.state.address">
            <i slot="left" class="iconfont icon-dingwei header-left"></i>
            <router-link slot="right" class="header-right" to="/login">登录</router-link>
        </HeaderTop>
        <div class="swiper-container" v-if="foodTypes.length">
            <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(foodType, index) of foodTypes" :key="index">
                        <ul class="msite-ad">
                            <li class="msite-ad-item" v-for="(item, index) of foodType" :key="index">
                                <img :src="item.img">
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        <div class="msite-ad clearfix" v-if="foodTypes.length">
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
        <div class="msite-shop" v-if="foodTypes.length">
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
        <div class="wait" v-else>
            <img src="../../../static/img/5-121204193Q8.gif">
            <p>拼命加载中</p>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import ShopList from './ShopList/ShopList.vue'
    export default {
        mounted () {
            // 切换页面时 需要重新创建 swiper
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
        },
        computed: {
            foodTypes () {
                const len = this.$store.state.foodType.length
                const num = Math.ceil(len / 10)
                let res = []
                for (let i = 0; i < num; i++) {
                    let arr = []
                    let index = ''
                    num === i + 1 ? index = len % 10 : index = 10
                    for (let x = 10 * i; x < index * i + 10; x++) {
                        arr.push(this.$store.state.foodType[x])
                    }
                    res.push(arr)
                }
                return res
            }
        },
        watch: {
            foodTypes () {
                // 下次界面更新完毕后 立即执行传入的回调函数
                // $nextTick 写在数据更新之后 界面更新后执行
                this.$nextTick(() => {
                    // 创建轮播图
                    new Swiper('.swiper-container', {
                        direction: 'horizontal',
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    })
                })
            }
        }
    }
</script>
<style lang="less">
    .ad-item() {
        position: relative;
        width: 166px;
        height: 138px;
        padding-top: 16px;
        padding-left: 16px;
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
    .wait {
        text-align: center;
        margin-top: 50%
    }
    .msite {
        height: 678px;
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
