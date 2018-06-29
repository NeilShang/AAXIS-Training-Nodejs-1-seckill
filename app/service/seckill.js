'use strict';
const Service = require('egg').Service;

var redis = require('redis');
var kafka = require('kafka-node');
var Client = kafka.Client;
var Producer = kafka.Producer;
var kafkaClient = new kafka.Client('127.0.0.1:2181');
var producer = new Producer(kafkaClient);




class Seckill extends Service {
    async show(stringA,stringB) { //异步防阻塞
        secKillCoreProcessfunction();
        return stringA + " and " + stringB;
    }
}

var secKillCoreProcessfunction =function(oldClient){
    console.log("start seckill");
    if (oldClient == 'undefined' || oldClient == null) {
        console.log("new client");
        var client = redis.createClient();
    }else{
        console.log("old client")
        var client = oldClient;
    }
    client.on('error', function (er) {
        console.log('Error with client');
        console.error(er.stack);
        client.end(true);
    });
    client.watch("counter");
    client.get("counter", function (err, reply) {

    var replyCounter=parseInt(reply);
    console.log("replyCounter is"+replyCounter);
    if(replyCounter>0){
        var multi = client.multi();
        multi.decr("counter");
        multi.exec(function (err, replies) {
            if (replies == null) {
                console.log('get the product,once again!')
                secKillCoreProcessfunction(client);
            } else {
                console.log('get the product');
                var payloads = [
                    {
                        topic: 'WATCH_SECKILL_GOT',
                        messages: 'buy 1 car',
                        partition: 0
                    }
                ];
                console.log('111111111111');
                console.log("successmessge"+payloads);
                producer.send(payloads, function (err, data) {
                    console.log(data);
                    console.log(err);
                });
               /* res.send(replies);*/
                client.end(true);
            }
        });
    }

    })

}
module.exports = Seckill;
