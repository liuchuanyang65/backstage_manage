import React from 'react'

export default class DemoFour extends React.Component{
  render () {
    return (
      <HelloMessage name="lucy"></HelloMessage>
    )
  }
}

class HelloMessage extends React.Component {
  render () {
    return (
      <h1>Hello, {this.props.name}</h1>
    )
  }
}