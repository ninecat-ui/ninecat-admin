import '@/mock/index'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import service from '@/api/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/global.scss'

import '@/router/permission.js'

Vue.use(ElementUI, {
  size: 'small'
})

Vue.use(service)

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
