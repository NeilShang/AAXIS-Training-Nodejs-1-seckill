# SecKillExample

AAXIS China Training- Neil Shang

## 准备
```bash
1.Zookeeper & Kafka 环境
```
请参考  [如何使用 Zookeeper & Kafka ](https://blog.csdn.net/u010054969/article/details/70241478)
```bash
2.SecKillExample 安装
$ npm install 
```

### 如何使用
```bash
1.修改数据库配置 "\seckill\app\models\connectPool.js",对应表中只有两列"fecha","status".
2.启动 zookeeper.
3.启动 kafka.
4.创建topic "WATCH_SECKILL_GOT"
5.启动SecKillExample-- npm run dev
7.访问 http://127.0.0.1:7001/init to init
8.使用 jmeter 测试
9.Jmeter 测试完成后,查看数据库新增数据.
(如果需要修改秒杀的总数请在此修改 "\seckill\app\controller\inintController.js")
```

### 部分启动命令备忘
```bash
.\bin\windows\kafka-server-start.bat .\config\server.properties
.\bin\windows\kafka-topics.bat --create --zookeeper 127.0.0.1:2181 --replication-factor 1 --partitions 1 --topic WATCH_SECKILL_GOT
.\bin\windows\kafka-topics.bat --list --zookeeper 127.0.0.1:2181
```

