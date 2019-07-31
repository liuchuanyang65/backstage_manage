import React from 'react'

export default class DemoThree extends React.Component{
  render () {
    const arrEle = [
      <h1 key="1">Hello World!</h1>,
      <h2 key="2">React is awesome</h2>
    ]
    return (
      <div>{arrEle}</div>
    )
  }
}