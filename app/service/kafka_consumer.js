var OptPool = require('../models/connectPool');
var optPool = new OptPool();
var pool = optPool.getPool();
var kafka = require('kafka-node')
var Client = kafka.Client,
 Consumer = kafka.Consumer,
    client = new kafka.Client('127.0.0.1:2181'),
    consumer = new Consumer(
        client,
        [
            {topic: 'WATCH_SECKILL_GOT',
                partition: 0}
        ],
        {
            autoCommit: true
        }
    );
consumer.on('message', function (message) {
    console.log("write in mysql")
    pool.getConnection(function(err,conn) {
        var fecha = new Date().toString();
        var sql = 'insert into sekillLog (fecha,status) values(?,?)';
        var param = [fecha, 'success'];
        conn.query(sql, param, function (err, rs) {
            if (err) {
                console.log('insert err:', err.message);
                return;
            }
            console.log('log seckill success');
            conn.release();
        })
    });

});



