'use strict';
const Controller = require('egg').Controller;
var kafka = require('kafka-node');
var Client = kafka.Client;
var redis = require('redis');
var client = redis.createClient();
var kafkaClient = new kafka.Client('127.0.0.1:2181');

class CustomController extends Controller {
    async initCounter() {
        client.set("counter",10);
        console.log("init success !")
    }
}
module.exports = CustomController;