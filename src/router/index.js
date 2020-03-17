import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/home/Home.vue'
import Activity from '../view/activity/Activity.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
