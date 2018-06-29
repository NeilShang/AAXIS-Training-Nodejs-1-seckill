# SecKillExample

AAXIS China Training- Neil Shang

## Prepare
```bash
1.Zookeeper & kafka 
please refer to https://blog.csdn.net/u010054969/article/details/70241478
2.$ npm install 
```

### How to test
```bash
1.change mysql cofing in "\egg-example\app\models\connectPool.js"
2.run zookeeper
3.run kafka
4.creat topic "WATCH_SECKILL_GOT"
5.use npm run dev to start
7.visit http://127.0.0.1:7001/init to init
8.use jmeter to test
9.reviw mysql database the new log only can be ten.
(if you want change please change in there \egg-example\app\controller\inintController.js)
```

### Chinese guide

```bash
$ npm start
$ npm stop
```

