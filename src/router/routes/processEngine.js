export default {
  path: '/processEngine',
  name: 'processEngine',
  meta: {
    label: '流程引擎',
    icon: 'el-icon-s-unfold',
    role: ''
  },
  component: () => import('@/pages/ProcessEngine/index.vue')
}
