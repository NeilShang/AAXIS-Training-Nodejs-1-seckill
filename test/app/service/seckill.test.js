
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/seckill.test.js', () => {

  before(() => {
    app.redis.set('counter', 1);
  });

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should get "success" then "fail"', async () => {
    const ctx = app.mockContext();
    let result = await ctx.service.seckill.secKillCoreProcessfunction('11');
    assert(result, 'success');

    result = await ctx.service.seckill.secKillCoreProcessfunction('11');
    assert(result, 'fail');
  });


});
