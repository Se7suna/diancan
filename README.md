# Vue全家桶仿饿了吗

这个demo是根据饿了吗的官网手机端(iphone6S plus)截图按照自己的思路做的，并非照着视频教程抄。

![截图](/doc/0.png)
<br>

因为截图只有（414 × 736），所以移动端主要适配iphone 6s和iphone 6sp。

> * [项目描述](#项目描述)
> * [界面功能](#界面功能)
> * [技术选型](#技术选型)
> * [Http请求](#Http请求)
> * [项目踩坑](#项目踩坑)

------

### 项目描述

* 项目为饿了吗WebApp
* 项目包括商家、商品、购物车、登录等多个组件
* 主要使用Vue全家桶 + ES6 + WebPack
* 采用模块化、组件化、工程化的模式开发
* 使用Git进行版本控制
> 因为偷懒所以登录错误信息暂时先用着console.log  ╰(￣▽￣)╮

------

### 界面功能

* 进入首页时根据mock的地址信息，异步生成轮播图

![轮播图](/doc/1.gif)
<br>

* 然后发送ajax请求获取商家列表

![商家信息](/doc/2.gif)
<br>

* 综合、好评、距离的排序演示

![排序](/doc/3.gif)
<br>

* 点击商家后发送ajax请求根据商家ID获取商家信息然后生成商家页

![商家页](/doc/4.gif)
<br>

* 商品列表滚动演示(使用原生JS制作)

![商品列表](/doc/5.gif)
<br>

* 购物车添加、减少、清空商品演示

![购物车](/doc/6.gif)
<br>

* 其他组件展示

![其他组件](/doc/7.gif)
<br>

* 可使用短信和密码两种登录(由于没有后台发送验证码，所以只要手机格式正确验证码为6位即可登录测试)

![登录](/doc/8.gif)
<br>

* 登录成功后发送ajax请求获取用户信息，显示相应数据

![用户信息](/doc/9.gif)

------

### 技术选型

1. 前台数据交互
    * Vue
    * Vue-Router
    * Vuex
    * Swiper
2. 后台交互
    * mock.js
    * axios
3. 模块化
    * ES6
4. 项目构建/工程化
    * Vue-cli
    * WebPack
    * EsLint
5. css预编译
    * less

-----

### Http请求
1. reqAddress
  * 登录获取地址信息
  * url: /address
  * type: GET
  * data: {jd: Number, wd: Number}

    > 经度, 纬度
2. reqFoodType
  * 获取轮播图列表
  * url: /foodtype
  * type: GET
3. reqShops
  * 获取商家列表
  * url: /shops
  * type: GET
  * data: {jd: Number, wd: Number}

    > 经度, 纬度
4. reqCode
  * 获取登录验证码
  * url: /getcode
  * type: GET
5. reqFoods
  * 获取商家食物列表
  * url: /foods
  * type: GET
  * data: {shopId: Number}

    > 商家ID
6. reqUser
  * 登录获取用户信息
  * url: /user
  * type: POST
  * data: {user: String, pwd: String, code: String}

    > 用户名, 密码, 验证码

------

### 项目踩坑

   1. 对比数字前 先注意数据类型
   2. Vue.set 给后添加的数据增加监听
   3. v-if 解决解决 undefined 报错
   4. watch + this.$nextTick(callback) 解决创建时机问题
   5. native修饰符 解决组件原生事件无效问题
   6. 重新设置图片 src 可以刷新图片(在路径后面加一个查询参数)
   7. 小数计算不精准 res.toFixed(2) 可将结果保留两位小数
   8. 单例模式 可以将创建的对象保存到Vue实例(this里面)
   9. 路由push跳转和replace跳转操作历史记录
   10. v-for 优先于 v-if 如果需要先判断 可在外面包裹 template(该标签不渲染)
