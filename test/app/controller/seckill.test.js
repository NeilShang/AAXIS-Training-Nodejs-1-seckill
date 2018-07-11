'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/seckill.test.js', () => {

  before(() => {
    app.redis.set('counter', 1);
  });

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should get "seckill result success." then "seckill result fail"', async () => {
    await app.mockCsrf();
    await app.httpRequest()
      .get('/seckill')
      .expect('seckill result success.')
      .expect(200);

    await app.httpRequest()
      .get('/seckill')
      .expect('seckill result fail')
      .expect(200);
  });
});
