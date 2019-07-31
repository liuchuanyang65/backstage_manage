import React from 'react'

export default class DemoTen extends React.Component{
  render () {
    return (
      <div>
        <Hello name="world"/>
      </div>
    )
  }
}

class Hello extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      opacity: 1.0
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      let opacity = this.state.opacity
      opacity -= 0.05
      if (opacity < 0.1) {
        opacity = 1.0
      }
      this.setState({
        opacity: opacity
      })
    })
  }
  render () {
    return (
      <div style={{ opacity: this.state.opacity }}>
        Hello {this.props.name}
      </div>
    )
  }
}