// NPM Packages
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

/* eslint-disable no-console */
console.log(`__dirname:  ${__dirname}`); // path current JS file resides
console.log(`./: ${process.cwd()}`); // path current working directory

// Application Variables
const app = express();
const port = process.env.PORT || 8000;

// serve static files with specified paths & setting property
app.use(express.static('./'));
app.set('views', './');
app.set('view engine', 'html');

const poiRouter = require('./routes/poiRoutes');

app.use('/poi', poiRouter); // http://localhost:8000/poi

// routes HTTP GET requests to specified path with specified callback function
app.get('/', (req, res) => {
    res.render( // renders view as absolute path or relative path to 'views' setting
        'index',
    );
});

app.listen(port, () => {
    debug(`Map Demo Application running on ${chalk.green(port)}...`);
});
