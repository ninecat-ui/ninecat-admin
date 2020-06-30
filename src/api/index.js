import axios from 'axios'
import Nprogress from 'nprogress'

window.cancelTokenList = []

const service = axios.create({
  timeout: 15000
})

service.interceptors.request.use(config => {
  Nprogress.start()
  const source = axios.CancelToken.source()
  window.cancelTokenList.push(source)
  config.cancelToken = source.token
  return config
}, (err) => {
  Promise.reject(err)
})

service.interceptors.response.use(response => {
  Nprogress.done()
  window.cancelTokenList = window.cancelTokenList
    .filter(x => x.token !== response.config.cancelToken)
  if (response.data) {
    return response.data
  }
  return response
}, (err) => {
  Nprogress.done()
  Promise.reject(err)
})

service.install = function (Vue) {
  Vue.prototype.$api = service
}

export default service
