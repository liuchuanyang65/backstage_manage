import React from 'react'

export default class DemoFive extends React.Component{
  render () {
    return (
      <NoteList>
        <span>hello</span>
        <span>world</span>
      </NoteList>
    )
  }
}

class NoteList extends React.Component{
  render () {
    return (
      <ol>
        {
          this.props.children.map((item, i) => {
            return <li key={i}>{item}</li>
          })
        }
      </ol>
    )
  }
}