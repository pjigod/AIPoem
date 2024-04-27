import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/home.vue'
import login from '../views/login/login.vue'
import my from '../views/my/my.vue'
import about from '../views/about/about.vue'
import createPoem from '../views/createPoem/createPoem.vue'
import register from '../views/register/register.vue'
import forget from '../views/forget/forget.vue'
import poemCollect from '../views/poemCollect/poemCollect.vue'
import searchList from '../views/searchList/searchList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/createPoem',
      name: 'createPoem',
      component: createPoem
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/poemCollect/',
      name: 'poemCollect',
      component: poemCollect,

      // props:(route)=>({pagenum:route.params.pagenum||'0'})
    },
    {
      path:'/searchList/:searchConnent',
      name:'searchList',
      component:searchList
    }


  ]
})

export default router
