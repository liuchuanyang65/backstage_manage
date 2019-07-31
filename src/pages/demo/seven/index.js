import React from 'react'

export default class DemoSeven extends React.Component{
  render () {
    return (
      <MyComponent/>
    )
  }
}

class MyComponent extends React.Component{
  constructor (props) {
    super(props)
    this.myTextInput = React.createRef()
  }
  state = {
    value: ''
  }
  handleClick = () => {
    this.myTextInput.current.focus()
  }
  render () {
    return (
      <div>
        <input type="text" ref={this.myTextInput}></input>
        <input type="button" value={this.state.value} onClick={this.handleClick}></input>
      </div>
    )
  }
}