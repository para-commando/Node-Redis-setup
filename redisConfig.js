const redis = require('redis');
const client = redis.createClient({
    socket: {
        host: 'localhost',
        port: '6379'
    },
   
});
client.connect();

module.exports = client;

