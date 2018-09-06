// 直接更新 state
import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPE,
    RECEIVE_SHOPS,
    RECEIVE_FOODS,
    RECEIVE_CAR,
    RECEIVE_CLEARCAR,
    RECEIVE_GETUSER
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
    [RECEIVE_CAR] (state, {isAdd, foodId}) {
        for (let i of state.showShop.food) {
            for (let food of i.foods) {
                if (+food.id === +foodId) {
                    if (isAdd) {
                        food.buy++
                    } else {
                        food.buy--
                    }
                    return
                }
            }
        }
    },
    [RECEIVE_CLEARCAR] (state) {
        for (let i of state.showShop.food) {
            for (let food of i.foods) {
               food.buy = 0
            }
        }
    },
    [RECEIVE_GETUSER] (state, user) {
        state.user = user
    }
}
