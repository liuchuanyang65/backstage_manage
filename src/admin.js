import React from 'react'
import { Row, Col } from 'antd'
import NavLeft from './components/base/NavLeft'
import './style/common.less'

export default class Admin extends React.Component{
  render () {
    return (
      <Row className="container">
        <Col span={4} className="nav__left">
          <NavLeft/>
        </Col>
        <Col span={20} className="main">
          <Row className="content">{this.props.children}</Row>
        </Col>
      </Row>
    )
  }
}