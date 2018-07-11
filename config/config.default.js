'use strict';
module.exports = appInfo => {
  const config = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530197786503_5365';
  config.middleware = [];
  config.kafkajs = {
    host: 'localhost:9092',
    sub: [
      {
        groupId: 'consumer-groupId',
        topics: [ 'seckill' ],
        'seckill-KEYS': [ 'WATCH_SECKILL_GOT' ],
      },
    ],
    pub:
            {
              key: 'test',
              topics: [ 'seckill' ],
              requireAcks: 1,
              ackTimeoutMs: 1000,
              partitionerType: 2,
              partition: 0,
              attributes: 0,
            },
    app: true,
    agent: false,
  };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '520930',
      database: 'seckill',
    },
    app: true,
    agent: false,
  };
  config.redis = {
    client: {
      port: '6379',
      host: 'localhost',
      password: null,
      db: 0,
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  };


  return config;
};

