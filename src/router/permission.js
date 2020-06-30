import router, { rootRouter } from './index'
import { getLoginUserInfo } from '@/api/module/user'
import store from '@/store/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

// 权限校验
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.role) {
    return roles.includes(route.meta.role)
  } else {
    return true
  }
}

// 路由权限过滤
const filterRoutes = (routes, roles) => {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

// 路由数据入store
const getRouteData = (routes) => {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (tmp.path !== '/') {
      if (tmp.children) {
        tmp.children = getRouteData(tmp.children)
      }
      delete tmp.component
      res.push(tmp)
    }
  })
  return res
}

let isFirst = true

router.beforeEach((to, from, next) => {
  NProgress.start()
  const { path, name, meta } = to
  window.cancelTokenList.forEach(x => x.cancel())
  window.cancelTokenList = []
  if (isFirst && !store.getters['userInfo/getUserToken']) {
    getLoginUserInfo().then((userInfo) => {
      const { realName } = userInfo
      store.dispatch('userInfo/setUserTokenAction', userInfo.token)
      store.dispatch('userInfo/setUserRealNameAction', realName)
      store.dispatch('userInfo/setUserInfoAction', userInfo)
      store.dispatch('userInfo/setPermissionsAction', userInfo.permissions)
      const accessedRoutes = filterRoutes([rootRouter], userInfo.permissions)
      store.dispatch('adminSetting/setRouterMapAction', getRouteData(accessedRoutes))
      router.addRoutes(accessedRoutes)
      next({ ...to, replace: true })
      if (name) {
        store.dispatch('adminSetting/setOpenRouterAction', { path, name, meta })
        store.dispatch('adminSetting/setCurrectRouteAction', { path, name, meta })
      }
      NProgress.done()
    }, () => next('/403'))
    isFirst = false
  } else {
    next()
    if (name) {
      store.dispatch('adminSetting/setOpenRouterAction', { path, name, meta })
      store.dispatch('adminSetting/setCurrectRouteAction', { path, name, meta })
    }
    NProgress.done()
  }
})
