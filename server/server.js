require('dotenv').config();
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('tracer').console();
const config = require('./config');

const app = express();
const SERVICE = 'SERVER';

app.use(bodyParser.json({
    // limit: '50mb',
    type: 'application/json'
}));

app.use(bodyParser.urlencoded({
    // limit: '50mb',
    extended: true
}));

// listen for requests
const server = app.listen(config.port, config.host, () => {
    logger.info(SERVICE, `Your app is listening on port: ${server.address().port}`);
});

// build all endpoints based on file names
const routes = fs.readdirSync('./routes');
routes.forEach(route => {
    if (/\w+.js$/.test(route)) {
        const endpoint = route.replace(/.js$/, '');
        app.use(`/${endpoint}`, require(`./routes/${route}`));

    }
});

// health check
app.get('/healthCheck', function (req, res) {
    res.send('I\'m healthy');
});

app.use('*', (req, res) => {
    return res.status(404).json({
        error: '404'
    });
});

module.exports = app;