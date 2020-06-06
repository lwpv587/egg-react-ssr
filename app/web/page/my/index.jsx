import React, { Component } from 'react'
import Layout from 'component/layout/default'
import Item from './component/item'
import './index.scss'
class My extends Component {
  render () {
    const { listData } = this.props
    const list = listData.datas.data.map(item => <Item key={item.id} title={item.title} imageUrl={item.imageUrl} handleClick={() => this.link(item.id)} />)
    return (
      <Layout {...this.props}>
        <div className="home-wrapper">
          <div className="list-content">{list}</div>
        </div>
      </Layout>
    )
  }

  link (id) {
    window.location.href = `/mydtl/${id}`
  }
}

export default My
