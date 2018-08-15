// 直接更新 state
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPE,
    RECEIVE_SHOPS,
    RECEIVE_FOODS
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
    },
    [RECEIVE_FOODS] (state, foods) {
        state.foods = foods
    }
}
