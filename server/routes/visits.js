const redis = require('redis');
const keys = require('../keys');

const client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

client.set('visits', 401);

module.exports = app => {
    app.get('/visits', (req, res) => {
        client.get('visits', (err, visits) => {
            console.log(visits);
    
            res.send({visits});
            client.set('visits', parseInt(visits) + 1);
        });
    });
}