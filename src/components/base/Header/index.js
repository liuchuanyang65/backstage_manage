import React from 'react'
import './index.less'

export default class Header extends React.Component{
  render () {
    return (
      <div className="header flex_r">
        <div className="user__info mr30">admin</div>
      </div>
    )
  }
}