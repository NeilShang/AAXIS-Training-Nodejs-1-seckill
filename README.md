# SecKillExample

AAXIS China Training- Neil Shang

## update Log
2018-07-11 
1.add plugins  "'egg-mysql" "egg-kafkajs" "egg-redis"
2.add test case 'npm test'

## Prepare
```bash
1.Zookeeper & Kafka 
```
please refer to  [how to use Zookeeper & Kafka ](https://blog.csdn.net/u010054969/article/details/70241478)
```bash
2.redis install and use for windows.
```
please refer to  [how to install redis in windows environment ](https://www.cnblogs.com/M-LittleBird/p/5902850.html)
```bash
3.install mysql and create table.
```
 [how to install mysql ](https://blog.csdn.net/wokaowokaowokao12345/article/details/76736152)
```bash
SQL:  
create table seckilllog(
   fecha varchar(50),
 status varchar(20),
 id varchar(20)
);
4.$ npm install 
```

### How to test
```bash
1.change mysql cofing in "\seckill\app\config\mysqlConfig.js"
2.run zookeeper
3.run kafka
4.start redis  in windows environment.
5.creat topic "WATCH_SECKILL_GOT"
6.use npm run dev to start
7.visit 'http://127.0.0.1:7001/init' to init'
8.use jmeter to test 'http://127.0.0.1:7001/seckill?id=XXX'
9.reviw mysql database the new log only can be ten.
(if you want change please change in there "\seckill\app\controller\inintController.js")
```

### Note
```bash
.\bin\windows\kafka-server-start.bat .\config\server.properties
.\bin\windows\kafka-topics.bat --create --zookeeper 127.0.0.1:2181 --replication-factor 1 --partitions 1 --topic WATCH_SECKILL_GOT
.\bin\windows\kafka-topics.bat --list --zookeeper 127.0.0.1:2181
```

