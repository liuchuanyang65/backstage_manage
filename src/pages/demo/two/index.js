import React from 'react'

export default class DemoTwo extends React.Component{
  render () {
    const nameList = ['Lucy', 'Jack', 'Lily']
    return (
      <div>
        {
          nameList.map((item, i) => {
            return <p>Hello, {item}!</p>
          })
        }
      </div>
    )
  }
}