'use strict';
const Controller = require('egg').Controller;
class CustomController extends Controller {
  async custonIndex() {
    const id = this.ctx.query.id;
    const result = await this.ctx.service.seckill.secKillCoreProcessfunction(id);
    this.ctx.body = 'seckill result ' + result;
  }
}
module.exports = CustomController;
