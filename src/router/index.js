import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
import LogPhone from '../components/LogPhone/LogPhone.vue'
import LogPwd from '../components/LogPwd/LogPwd.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopEval from '../views/Shop/ShopEval/ShopEval.vue'
import ShopChoose from '../views/Shop/ShopChoose/ShopChoose.vue'
import ShopScore from '../views/Shop/ShopScore/ShopScore.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            redirect: '/login/phone',
            component: Login,
            children: [
                {
                    path: 'phone',
                    component: LogPhone
                },
                {
                    path: 'pwd',
                    component: LogPwd
                }
            ]
        },
        {
            path: '/shop',
            redirect: '/shop/choose',
            component: Shop,
            children: [
                {
                    path: 'eval',
                    component: ShopEval
                },
                {
                    path: 'choose',
                    component: ShopChoose,
                    meta: {
                        showShopCar: true
                    }
                },
                {
                    path: 'score',
                    component: ShopScore
                }
            ]
        }
    ]
})
