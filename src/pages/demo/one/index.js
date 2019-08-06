import React from 'react'
import { http } from '../../../plugins/http'

export default class DemoOne extends React.Component{

  componentWillMount () {
  }

  componentDidMount () {
    this.getList()
  }

  getList = () => {
    http('GET_QRCODE_LOGIN').then(res => {
      if (res.success) {
        console.log(res.data.qrCodeUrl)
      }
    })
  }

  render () {
    return (
      <div>Hello World!</div>
    )
  }
} 