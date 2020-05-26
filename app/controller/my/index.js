'use strict'

const egg = require('egg')

class MyController extends egg.Controller {
  async list () {
    const { ctx, service } = this
    const result = await service.my.list()
    await ctx.render('my.js', { listData: result })
  }

  async detail () {
    const { ctx, service } = this
    const result = await service.my.detail(ctx.params.id)
    await ctx.render('mydtl.js', { detailData: result })
  }
}

module.exports = MyController