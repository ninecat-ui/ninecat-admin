const state = {
  userInfo: {},
  realName: '',
  token: '',
  permissions: []
}

const getters = {
  getUserInfo: state => state.userInfo,
  getRealName: state => state.realName,
  getUserToken: state => state.token,
  getPermissions: state => state.permissions
}

const mutations = {
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  setUserToken (state, payload) {
    state.token = payload
  },
  setUserRealName (state, payload) {
    state.realName = payload
  },
  setPermissions (state, payload) {
    state.permissions = payload
  }
}

const actions = {
  setUserInfoAction ({ commit }, payload) {
    commit('setUserInfo', payload)
  },
  setUserTokenAction ({ commit }, payload) {
    commit('setUserToken', payload)
  },
  setUserRealNameAction ({ commit }, payload) {
    commit('setUserRealName', payload)
  },
  setPermissionsAction ({ commit }, payload) {
    commit('setPermissions', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
