'use strict'

const egg = require('egg')

class MyController extends egg.Controller {
  async list () {
    const { ctx, service } = this
    const result = await service.my.list()
    await ctx.render('my.js', { listData: result, title: '我的首页' })
  }

  async detail () {
    // Node端获取数据
    // const { ctx, service } = this
    // const result = await service.my.detail(ctx.params.id)
    // await ctx.render('mydtl.js', { detailData: result, title: '我的详情页' })

    // web端使用asyncData获取数据
    const { ctx } = this
    await ctx.render('mydtl.js', { title: '我的详情页' })
  }

  async detailApi () {
    const { ctx, service } = this
    const result = await service.my.detail(ctx.params.id)
    ctx.body = result
  }
}

module.exports = MyController