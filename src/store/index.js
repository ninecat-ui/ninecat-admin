import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
import adminSetting from './adminSetting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo,
    adminSetting
  }
})
