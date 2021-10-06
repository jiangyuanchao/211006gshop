
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profil from '../pages/Profil/Profil'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{  //  配置meta属性，用于控制路由组件在指定条件下显示
                ShowFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                ShowFooter:true
            }
        },
        {
            path:'/profil',
            component:Profil,
            meta:{
                ShowFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                ShowFooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite',// 设置msite为显示首页
            meta:{
                ShowFooter:true
            }
            
        },
        {
            path:'/login',
            component:Login,
            meta:{
                ShowFooter:false
            }
        }
    ]
})