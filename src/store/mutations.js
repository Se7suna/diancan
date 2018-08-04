// 直接更新 state
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPE,
    RECEIVE_SHOPS
} from './mutation-types.js'
export default {
    [RECEIVE_ADDRESS] (state, address) {
        state.address = address
    },
    [RECEIVE_FOODTYPE] (state, foodtype) {
        state.foodType = foodtype
    },
    [RECEIVE_SHOPS] (state, shops) {
        state.shops = shops
    }
}
