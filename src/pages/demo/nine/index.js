import React from 'react'

export default class DemoNine extends React.Component{
  render () {
    return (
      <div>
        <Input/>
      </div>
    )
  }
}

class Input extends  React.Component{
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render () {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange}></input>
        <p>{this.state.value}</p>
      </div>
    )
    
  }
}