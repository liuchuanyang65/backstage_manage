const CommonAPI = {
  GET_QRCODE_LOGIN: {
    method: 'GET',
    desc: '获取登入二维码',
    path: '/merchant/common/login/qrcode'
  }
}

const apis = Object.assign(CommonAPI)

export default apis