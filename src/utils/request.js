import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

console.log(process.env.VUE_APP_BASE_API)

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    config.headers['Content-Type'] = 'application/json'

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  response => {
    return response.data
  },
  error => {
    const status = Number(error.response.status)
    const message = error.response.data.message

    console.log(status)

    if (status === 400) {
      Message({
        message: message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }

    if (status === 403) {
      Message({
        message: '抱歉，您没有该页面的访问权限',
        type: 'error',
        duration: 5 * 1000
      })
    }

    if (status >= 500) {
      Message({
        message: message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 508: Illegal token; 512: Other clients logged in; 514: Token expired;
      if (status === 508 || status === 512 || status === 514) {
        // to re-logins
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(message || 'Error'))
    }

    return Promise.reject(error)
  }
)

export default service
