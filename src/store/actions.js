// 通过 mutation 间接更新 state
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPE,
    RECEIVE_SHOPS
} from './mutation-types.js'
import {
    reqAddress,
    reqFoodType,
    reqShops
} from '../api'
export default {
    // 异步获取数据
    getAddress ({commit, state}) {
        // 发送ajax请求, state里的数据可以直接使用
        const URL = '/address'
        reqAddress(URL).then(result => {
            // 提交mutation
            commit(RECEIVE_ADDRESS, result)
        })
    },
    async getFoodType ({commit}) {
        const URL = '/foodtype'
        const result = await reqFoodType(URL)
        commit(RECEIVE_FOODTYPE, result)
    },
    async getShops ({commit}) {
        const URL = '/shops'
        const result = await reqShops(URL)
        commit(RECEIVE_SHOPS, result)
    }
}
