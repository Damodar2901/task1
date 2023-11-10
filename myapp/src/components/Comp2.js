import React, { Component } from 'react'

export default class Comp2 extends Component {
  render() {
    return (
      <div className='mainn'>
  <h1>{this.props.name}</h1>
  <h2>{this.props.Number}</h2>
  <h3>{this.props.place}</h3>
  <img src={this.props.image} alt="" />
  <h3>{this.props.area}</h3>
      </div>
    )
  }
}
