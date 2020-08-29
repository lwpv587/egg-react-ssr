'use strict'

const egg = require('egg')
const db = require('../../../nedb/database')

class MyController extends egg.Controller {
  async list () {
    const { ctx, service } = this
    const result = await service.my.list()
    await ctx.render('my.js', { listData: result, title: '我的首页' })
  }

  async detail () {
    // 使用service获取数据
    // const { ctx, service } = this
    // const result = await service.my.detail(ctx.params.id)
    // await ctx.render('mydtl.js', { detailData: result, title: '我的详情页' })

    // web使用asyncData获取数据
    const { ctx } = this
    await ctx.render('mydtl.js', { title: '我的详情页' })
  }

  async detailApi () {
    const { ctx, service } = this
    const result = await service.my.detail(ctx.params.id)
    ctx.body = result
  }

  async user () {
    const { ctx } = this
    const result = await new Promise((resolve, reject) => {
      return db.find({}, (err, docs) => {
        if (!err) {
          resolve(docs)
        } else {
          reject(err)
        }
      })
    })
    await ctx.render('user.js', { title: '用户列表', userList: result })
  }

  async userAddApi () {
    const { ctx } = this
    const payload = ctx.request.query
    const result = await new Promise((resolve, reject) => {
      db.insert({
        name: payload.name,
        password: payload.password
      }, (err, docs) => {
        if (!err) {
          resolve({ code: 0, data: docs })
        } else {
          reject(err)
        }
      })
    })
    ctx.body = result
  }

  async userDelApi () {
    const { ctx } = this
    const payload = ctx.request.query
    const result = await new Promise((resolve, reject) => {
      db.remove({ _id: payload.id }, (err, docs) => {
        if (!err) {
          resolve({ code: 0, data: docs })
        } else {
          reject(err)
        }
      })
    })
    ctx.body = result
  }
}

module.exports = MyController