// 向外暴露包含多个接口请求函数的模块
// 接口请求函数以 req 开头 返回 promise对象
// 跨域配置 config --- index.js  proxyTable
import ajax from './ajax'
// 获取位置信息
export const reqAddress = url => ajax(url)
// 获取食品分类列表
export const reqFoodType = url => ajax(url)
// 获取商家列表
export const reqShops = url => ajax(url)
// 获取验证码
export const reqPwdImg = () => ajax('/getPwdImg')
// 获取商家食物列表
export const reqFoods = url => ajax(url)
// 用户登录请求
export const reqUser = (url, data) => ajax(url, data, 'POST')
