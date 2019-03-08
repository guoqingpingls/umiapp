import React from 'react'

export default class Order extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      name: 'Order'
    }
  }

  render () {
    const {name} = this.state
    return (
      <div>{name}</div>
    )
  }
}