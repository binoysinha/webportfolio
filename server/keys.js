module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    serverPort: process.env.SERVER_PORT,
    sendGridKey: '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' || process.env.SENDGRID_API_KEY
}