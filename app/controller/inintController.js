'use strict';
const Controller = require('egg').Controller;

class CustomController extends Controller {
  async initCounter() {
    const app = this;
    const redis = app.redis;
    redis.set('counter', 10);
    console.log('init success !');
  }
}

module.exports = CustomController;
