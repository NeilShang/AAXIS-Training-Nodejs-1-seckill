'use strict';
const Controller = require('egg').Controller;
class CustomController extends Controller {
    async custonIndex() {
        let str = await this.ctx.service.seckill.show('111','222');
        this.ctx.body = 'this is my controller'+str;
    }
}

module.exports = CustomController;