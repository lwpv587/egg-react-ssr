'use strict'

const egg = require('egg')

class MyController extends egg.Controller {
  async list () {
    const { ctx, service } = this
    const result = await service.my.list()
    await ctx.render('my.js', { listData: result, title: '我的首页' })
  }

  async detail () {
    const { ctx, service } = this
    const result = await service.my.detail(ctx.params.id)
    await ctx.render('mydtl.js', { detailData: result, title: '我的详情页' })
  }
}

module.exports = MyController