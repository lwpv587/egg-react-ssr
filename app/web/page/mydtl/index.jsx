import React, { Component } from 'react'
import Layout from 'component/layout/blog'
import './index.scss'
class Mydtl extends Component {
  render () {
    const { datas } = this.props.detailData
    return (
      <Layout>
        <div className="detail-wrapper">
          <h1 className="title">{datas.title}</h1>
          <img src={datas.imageUrl} alt="" width="500" />
          <br />
          <span>视频地址：{datas.videoUrl}</span>
          <br />
          <span>视频时长：{datas.videoTime}</span>
        </div>
      </Layout>
    )
  }
}

export default Mydtl
