import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/home/Home.vue'
import Activity from '../view/activity/Activity.vue'
import Certificate from '../view/certificate/Certificate.vue'
import Login from '../view/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/activity',
    component: Activity
  },
  {
    path: '/certificate',
    component: Certificate
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
