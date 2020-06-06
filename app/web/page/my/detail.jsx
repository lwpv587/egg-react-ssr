import React, { Component } from 'react'
import Layout from 'component/layout/default'
import './index.scss'
class Detail extends Component {
  render () {
    const { datas } = this.props.detailData
    return (
      <Layout {...this.props}>
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

export default Detail
