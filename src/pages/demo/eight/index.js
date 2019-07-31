import React from 'react'

export default class DemoEight extends React.Component{
  render () {
    return (
      <LikeButton/>
    )
  }
}

class LikeButton extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  handleClick = () => {
    this.setState({ liked: !this.state.liked })
  }

  render () {
    return (
      <p onClick={this.handleClick}>
        You {this.state.liked ? 'like' : 'haven\'t liked'} this. Click to toggle。
      </p>
    )
  }
}