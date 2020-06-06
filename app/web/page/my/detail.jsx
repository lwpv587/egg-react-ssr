import React, { Component } from 'react'
import Layout from 'component/layout/default'
import io from 'framework/request'
import './index.scss'
class Detail extends Component {
  static async asyncData (locals) {
    const url = locals.ctx.request.url
    const res = await io.get(`/api${url}`, locals)
    return { detailData: res.data }
  }

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
