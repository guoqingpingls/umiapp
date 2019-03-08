import React from 'react'

export default class Inquiry extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      name: 'inquiry'
    }
  }

  render () {
    const {name} = this.state
    return (
      <div>{name}</div>
    )
  }
}