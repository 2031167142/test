import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'
import User from '../views/User/User.vue'
import Search from '../views/Search/Search.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: Home },
  { path: '/home', component: Home },
  { path: '/user', component: User },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
