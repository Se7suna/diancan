// 直接更新 state
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPE,
    RECEIVE_SHOPS,
    RECEIVE_FOODS,
    RECEIVE_CAR
} from './mutation-types.js'
import Vue from 'vue'
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
        Vue.set(state.showShop, 'food', foods)
    },
    [RECEIVE_CAR] (state) {
        state.showShop.car.push(1)
    }
}
