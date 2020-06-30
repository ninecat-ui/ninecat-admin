const state = {
  routerMap: [],
  openRouter: [],
  currectRoute: {}
}

const getters = {
  getRouterMap: state => state.routerMap,
  getOpenRouter: state => state.openRouter,
  getCacheName: state => state.openRouter.map(item => item.name),
  getCurrectRoute: state => state.currectRoute
}

const mutations = {
  setCurrectRoute (state, payload) {
    state.currectRoute = payload
  },
  setRouterMap (state, payload) {
    state.routerMap = payload
  },
  setOpenRouter (state, payload) {
    const item = state.openRouter.find(item => item.name === payload.name)
    if (!item) {
      state.openRouter.push(payload)
    }
  },
  deleteOpenRouter (state, payload) {
    const index = state.openRouter.findIndex(item => item.name === payload)
    if (index > -1) {
      state.openRouter.splice(index, 1)
    }
  }
}

const actions = {
  setCurrectRouteAction ({ commit }, payload) {
    commit('setCurrectRoute', payload)
  },
  setRouterMapAction ({ commit }, payload) {
    const [route = {}] = payload
    if (route.children) {
      commit('setRouterMap', route.children)
    }
  },
  setOpenRouterAction ({ commit }, payload) {
    commit('setOpenRouter', payload)
  },
  deleteOpenRouterAction ({ commit }, payload) {
    commit('deleteOpenRouter', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
