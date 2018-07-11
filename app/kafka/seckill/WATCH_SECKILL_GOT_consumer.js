'use strict';

const Subscription = require('egg').Subscription;

class MessageConsumer extends Subscription {
  async subscribe(message) {
    const result = await this.app.mysql.insert('seckilllog', {
      fecha: new Date().toString(),
      status: 'seckill success',
      productId: message.value,
    });
    if (result.affectedRows === 1) {
      console.log('save success.');
    } else {
      console.warn('save error ', message);
    }
  }
}
module.exports = MessageConsumer;
