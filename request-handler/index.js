const express = require('express');
const db = require('../db/config');
const routers = require('./api');
const app = express();

app.use('/api', routers);
>>>>>>> Ready for deployment
>>>>>>> ESlint cleanup

module.exports = app;
