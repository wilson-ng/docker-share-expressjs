const express = require('express');
const Redis = require('ioredis');
const app = express();
const port = 3000;

const redis = new Redis({
    host: 'redis',
    port: 6379,
});

app.get('/', async (req, res) => {
    res.status(200).json({
        greet: `Hi everyone, thanks for joining docker --share.`,
        redis_ping: await redis.ping(),
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});