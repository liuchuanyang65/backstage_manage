import React from 'react'
import PropTypes from 'prop-types'

export default class DemoSix extends React.Component{
  render () {
    const data = '123'
    return (
      <div>
        <MyTitle title={data}></MyTitle>
      </div>
    )
  }
}

class MyTitle extends React.Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  static defaultProps = {
    title: 'Hello World'
  }
  render () {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}