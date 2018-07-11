'use strict';
const Service = require('egg').Service;


class Seckill extends Service {
  async secKillCoreProcessfunction(id) {
    console.log('start seckill id=' + id);
    const { app, ctx } = this;
    const redis = app.redis;
    await redis.watch('counter');
    const result = await redis.get('counter', function(err, reply) {
      const replyCounter = parseInt(reply);
      console.log('replyCounter is' + replyCounter);
      if (replyCounter > 0) {
        const multi = redis.multi();
        multi.decr('counter');
        multi.exec(function(err, replies) {
          if (replies == null) {
            console.log('not get the product,once again!');
            ctx.service.seckill.secKillCoreProcessfunction(id);
          } else {
            console.log('get the product');
            const msg = [ ctx.kafka.Message('seckill', 'WATCH_SECKILL_GOT', id) ];
            try {
              ctx.kafka.send(msg);
            } catch (err) {
              console.log('ask save error : ', err);
            }
          }
        });
      }
    });
    if (result > 0) {
      return 'success.';
    }
    return 'fail';

  }
}
module.exports = Seckill;
