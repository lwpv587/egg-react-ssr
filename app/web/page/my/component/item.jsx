import React, { Component } from 'react'

class Item extends Component {
  render () {
    return (
      <div className="list-item" onClick={this.props.handleClick}>
        <h1 className="item-title">{this.props.title}</h1>
        <img src={this.props.imageUrl} alt="" />
      </div>
    )
  }
}

export default Item