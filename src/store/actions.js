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
        // 发送ajax请求
        const geohash = state.wd + ',' + state.jd
        reqAddress(geohash).then(result => {
            // 提交mutation
            commit(RECEIVE_ADDRESS, {result})
        })
    },
    async getFoodType ({commit}) {
        const result = await reqFoodType()
        commit(RECEIVE_FOODTYPE, {result})
    },
    async getShops ({commit, state}) {
        const {jd, wd} = state
        const result = await reqShops(jd, wd)
        commit(RECEIVE_SHOPS, {result})
    }
}
