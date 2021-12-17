import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home.vue')
const User = () => import('../views/User/User.vue')
const Search = () => import('../views/Search/Search.vue')
const Login = () => import('..//views/Login/Login.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/user', component: User, name: 'User' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/search', component: Search, name: 'Search' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
