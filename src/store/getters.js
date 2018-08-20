// 基于 state 的 getter 计算属性
export default {
    phoneExp (state) {
        const exp = /^1[0|3-9]\d{9}$/g
        return exp.test(state.user.phone)
    }
}
