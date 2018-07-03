const mysql = require('mysql');
var mysqlConfig = require('../../config/mysqlConfig');
function OptPool(){
    this.pool = mysql.createPool({
        host: mysqlConfig.host,
        user: mysqlConfig.user,
        password: mysqlConfig.password,
        database: mysqlConfig.database,
        port: mysqlConfig.port
    });

    this.getPool=function(){
        return this.pool;
    }
};
module.exports = OptPool;