import React, { Component, useState, useEffect } from 'react'
import { consoleUrl } from 'lwp-npm-study'

// Class组件
// class Item extends Component {
//   render () {
//     return (
//       <div className="list-item" onClick={this.props.handleClick}>
//         <h1 className="item-title">{this.props.title}</h1>
//         <img src={this.props.imageUrl} alt="" />
//       </div>
//     )
//   }
// }

// Hook函数组件
function Item (props) {
  // useReducer
  const [free, setFree] = useState(false)
  useEffect(() => {
    console.log('安装')
    return () => {
      console.log('卸载')
      consoleUrl()
    }
  })
  return (
    <div className="list-item">
      <h1 className="item-title" onClick={props.handleClick}>{props.title}</h1>
      <img src={props.imageUrl} onClick={props.handleClick} alt="" />
      <p className="item-free"><span onClick={() => setFree(prev => !prev)}>{free ? '免费' : '收费'}</span></p>
    </div>
  )
}

export default Item