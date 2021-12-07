import axios from 'axios'

const request = axios.create({
  // 指定请求的根路径
  baseURL: 'http://www.liulongbin.top:8000',
})

export default request
