const express = require('express');
const redis = require('redis');


const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('visits', 0);

const PORT = 8081;

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of user visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

