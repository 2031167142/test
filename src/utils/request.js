import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
// 基于拦截器添加 token 认证
import store from '@/store/index'
Vue.use(Toast);

const request = axios.create({
  // 指定请求的根路径
  baseURL: 'http://www.liulongbin.top:8000',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 展示 loading 效果
    Toast.loading({
      message: '加载中...', // 文本内容
      duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失

    })
    // 获取 token 值
    const tokenStr = store.state.tokenInfo.token
    // 判断 tokenStr 的值是否为空
    if (tokenStr) {
      // 添加身份认证字段
      config.headers.Authorization = `Bearer ${tokenStr}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器（注意：响应拦截器也应该绑定给 instance 实例）
request.interceptors.response.use(
  response => {
    // 隐藏 loading 效果
    Toast.clear()
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
