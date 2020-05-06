import axios from 'axios'
const qs = require('qs')
const baseUrl = 'http://192.168.0.113:8360'
const get = async (url, params) => {
  url = baseUrl + url
  let response = null
  let options = {
    params,
    timeout: 60000
  }
  try {
    response = await axios.get(url, options)
    return response.data
  } catch (err) {
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null
    }
  }
}
const post = async (url, data, headers) => {
  url = baseUrl + url
  data = data || {}
  let response = null
  try {
    response = await axios.post(url, qs.stringify(data), { // 控制允许接受的状态码范围
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true
    })
    return response.data
  } catch (err) {
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null
    }
  }
}
export {
  get,
  post
}
