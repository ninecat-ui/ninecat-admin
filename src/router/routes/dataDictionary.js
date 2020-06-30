export default {
  path: '/dataDictionary',
  name: 'dataDictionary',
  meta: {
    label: '数据字典',
    icon: 'el-icon-s-data',
    role: ''
  },
  component: () => import('./components/defaultView.vue'),
  children: [
    {
      path: 'dictionaryConfig',
      name: 'dataDictionary/dictionaryConfig',
      meta: {
        label: '字典配置',
        icon: '',
        role: ''
      },
      component: () => import('@/pages/DataDictionary/DictionaryConfig/index.vue')
    },
    {
      path: 'dictionarySee',
      name: 'dataDictionary/dictionarySee',
      meta: {
        label: '字典查看',
        icon: '',
        role: ''
      },
      component: () => import('@/pages/DataDictionary/DictionarySee/index.vue')
    }
  ]
}
