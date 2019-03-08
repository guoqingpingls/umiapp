import React from 'react'

export default class Policy extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      name: 'policy'
    }
  }

  render () {
    const {name} = this.state
    return (
      <div>{name}</div>
    )
  }
}