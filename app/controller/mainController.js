'use strict';
const Controller = require('egg').Controller;
class CustomController extends Controller {
    async custonIndex() {
        let id =   this.ctx.query.id;
        let str = await this.ctx.service.seckill.show(id);
        this.ctx.body = 'this is my controller'+str;
    }
}
module.exports = CustomController;