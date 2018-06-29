const mysql = require('mysql');

function OptPool(){
    this.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '520930',
        database: 'seckill',
        port: '3306'
    });

    this.getPool=function(){
        return this.pool;
    }
};
module.exports = OptPool;