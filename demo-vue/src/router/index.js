import Vue from 'vue'
import Router from 'vue-router'
//导入登录页面组件
import Login from '../views/login.vue'
import Home from '../views/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
       // home页面并不需要被访问，只是作为其它组件的父组件
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      },
      redirect: '/index',
      children:[
        {
          path:'/index',
          name:'Index',
          component:() => import('@/views/home/index'),
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/user',
          name:'User',
          component:()=>import('@/views/user/index'),
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/user-center',
          name:'UserCenter',
          component:()=>import('@/views/user/UserCenter'),
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/operation',
          name:'Operation',
          component:()=>import('@/views/user/Operation'),
          meta:{
            requireAuth:true
          }
        }
      ]
    },
    //添加登录页面路由
    {
      path:'/login',
      name: 'Login',
      component: Login
    }
  ]
})
