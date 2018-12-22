const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./keys');

const PORT = keys.serverPort || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

client.set('visits', 123);


app.get('/visits', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send({visits});
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

