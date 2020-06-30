import service from '../index'

// 系统用户登录
export const getLoginUserInfo = () => service.get('/userInfo')

export default null
