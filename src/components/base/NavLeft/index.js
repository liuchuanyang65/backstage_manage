import React from 'react'
import MenuConfig from '../../../config/menuConfig'
import { NavLink } from 'react-router-dom'

import { Menu } from 'antd'

const { SubMenu } = Menu

export default class NavLeft extends React.Component{

  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)

    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.path}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return(
        <Menu.Item title={item.title} key={item.path}>
          <NavLink to={item.path}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  render () {
    return (
      <div>
        <Menu theme="dark" mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}