import MockAdapter from 'axios-mock-adapter'
import service from '../api/index'

const mock = new MockAdapter(service)

mock.onGet('/userInfo')
  // 200 为状态码，后面对象为返回data
  .reply(200, {
    id: 1,
    realName: '小王',
    token: 'xxxxxaaaa',
    permissions: []
  })
