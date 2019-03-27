import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Search from '@/components/Search'
import WorkShop from '@/components/WorkShop'
import Pay from '@/components/Pay'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Personal from '@/components/Personal'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta:{
        title:"关于糖客"
      }
    },
    {
      path: '/WorkShop',
      name: 'WorkShop',
      component: WorkShop,
      meta:{
        title:"糖客坊"
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta:{
        title:"糖客快搜"
      }
    },
    {
      path:'/Pay',
      name:'Pay',
      component:Pay,
      meta:{
        title:"产品购买"
      }
    },
    {
      path:'/Login',
      name:'Login',
      component:Login,
      meta:{
        title:"登陆"
      }
    },
    {
      path:'/Register',
      name:'Register',
      component:Register,
      meta:{
        title:"注册"
      }
    },
    {
      path:'/Personal',
      name:'Personal',
      component:Personal,
      meta:{
        title:"个人信息"
      }
    },

  ]
})
