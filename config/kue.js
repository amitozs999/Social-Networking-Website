const kue = require('kue');

const queue = kue.createQueue();


//using redis 
//cp->redis-server
//then open redis client


module.exports = queue;