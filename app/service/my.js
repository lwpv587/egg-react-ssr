'use strict'

const egg = require('egg')

class MyList extends egg.Service {
  async list () {
    const { ctx } = this
    const result = await ctx.curl('https://ark.analysys.cn/webapi/simple/video', {
      method: 'POST',
      contentType: 'json',
      dataType: 'json',
      data: {
        page: 1,
        pageSize: 12,
        type: 108
      }
    })
    return result.data
  }

  async detail (id) {
    const { ctx } = this
    const result = await ctx.curl('https://ark.analysys.cn/webapi/simple/video/detail', {
      method: 'POST',
      contentType: 'json',
      dataType: 'json',
      data: { id }
    })
    return result.data
  }
}

module.exports = MyList