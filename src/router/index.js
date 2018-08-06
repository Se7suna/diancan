import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
import LogPhone from '../components/LogPhone/LogPhone.vue'
import LogPwd from '../components/LogPwd/LogPwd.vue'
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
        }
    ]
})
