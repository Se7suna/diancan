// 向外暴露包含多个接口请求函数的模块
// 接口请求函数以 req 开头 返回 promise对象
// 跨域配置 config --- index.js  proxyTable
import ajax from './ajax'
// 1. 根据经纬度获取位置信息 (参数为经/纬度)
export const reqAddress = url => ajax(url)
// 2. 获取食品分类列表
export const reqFoodType = url => ajax(url)
// 3. 根据经纬度获取商家列表
export const reqShops = url => ajax(url)
// 4. 发送 ajax 请求获取验证码
export const reqPwdImg = () => ajax('/getPwdImg')
export const reqFoods = url => ajax(url)
