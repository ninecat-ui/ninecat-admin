export default {
  path: '/home',
  name: 'home',
  meta: {
    label: '首页',
    icon: 'el-icon-s-home',
    role: ''
  },
  component: () => import('@/pages/Home/index.vue')
}
