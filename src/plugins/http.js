/*
 * @Descripttion: 
 * @Author: chuanyangliu
 * @Date: 2019-07-31 10:27:22
 * @LastEditors: chuanyangliu
 * @LastEditTime: 2019-08-06 09:31:59
 */
import axios from 'axios'
import APIS from '../api/index'

window.axios = axios

let API_ROOT = process.env.REACT_APP_BASE_API || ''

// 注入默认配置
axios.defaults = Object.assign(axios.defaults, {
  timeout: 10000
})

// request 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return err
  }
)

// response 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return err
  }
)

// 处理 URL, 添加查询参数
function queryString (urlName, query = {}) {
  let params = []
  let url = APIS[urlName]

  let keys = Object.keys(query)
  keys.forEach(k => {
    query[k] && params.push(query[k])
  })
  params = params.length ? params.join('/') : ''
  API_ROOT = process.env.REACT_APP_BASE_API || ''
  let res = (url.path + params)
  API_ROOT && (res = API_ROOT + res) // 拼接完整路径
  return res
}

// 通用请求方法
export function http (option, data = {}) {
  // 默认配置对象
  let defOptions = {
    urlName: '', // API名称
    params: {}, // 其他参数
    query: {} // 链接后面成为链接一部分的参数
  }

  // 如果第一个参数是对象
  if (typeof option === 'object') {
    defOptions = Object.assign(defOptions, option)
  } else {
    defOptions.urlName = option
  }

  let params = defOptions.params || {}
  let api = APIS[defOptions.urlName]
  const urlName = queryString(defOptions.urlName, defOptions.query)

  window.addEventListener('scroll', e => {
    e.preventDefault()
  }, false)
  // 配置对象
  let requestData = {
    url: urlName, // 请求 URL
    method: api.method || 'POST', // 请求方法
    headers: {
      token: ''
    },
    params: api.method === 'GET' ? Object.assign(params, data) : {},
    data: api.method !== 'GET' ? Object.assign(params, data) : {} // 请求参数
  }

  // 发送请求
  return axios.request(requestData).then((res) => {
    if (res.data.success) {
      return res.data
    } else {
      return res.data
    }
  }).catch(res => {
    window.location.href = window.location.href.split('/#/')[0] + '/#/'
    return res.data
  })
}
