import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

const requireRoutes = require.context('./routes', true, /\.js$/)

const routes = []

requireRoutes.keys().forEach(item => {
  routes.push(require(`./routes/${item.slice(2)}`).default)
})

const rootCommon = {
  path: '/',
  name: 'mainIndex',
  meta: {
    label: '欢迎页',
    role: ''
  },
  component: () => import('@/pages/Welcome/index.vue')
}

routes.push(rootCommon)

export const rootRouter = {
  path: '/main',
  component: Layout,
  meta: {
    label: 'Layout'
  },
  children: routes
}

const commonRoutes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/404',
    component: () => import('@/pages/Common/404.vue')
  },
  {
    path: '/403',
    component: () => import('@/pages/Common/403.vue')
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: commonRoutes
})
