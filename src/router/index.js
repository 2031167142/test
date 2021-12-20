import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

const Home = () => import('@/views/Home/Home.vue')
const User = () => import('@/views/User/User.vue')
const Search = () => import('@/views/Search/Search.vue')
const Login = () => import('@/views/Login/Login.vue')
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

// 所有有权限页面的路径，都在这个数组之中
const pagePathArr = ['/user']

// 为路由的实例对象挂载全局前置守卫
router.beforeEach((to, from, next) => {
  // 访问的是有权限的页面，需要判断用户是否登录
  if (pagePathArr.indexOf(to.path) !== -1) {
    // 1. 从 store 中获取 token 的值
    //    注意：store.state.tokenInfo 要么是 {} 空对象，要么是包含 {token, refresh_token} 的对象
    const tokenStr = store.state.tokenInfo.token
    if (tokenStr) {
      // 1.1 token 有值，已登录过（操作：直接放行）
      next()
    } else {
      // 1.2 token 不存在，没有登录（操作：强制跳转到登录页）
      next('/login')
    }
  } else {
    // 访问的是没有权限的页面
    next()
  }
})

export default router
