/*
 * NPM Packages
*/
const express = require('express');
// const {Client, Status} = require('@googlemaps/google-maps-services-js');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');


/* eslint-disable no-console */
console.log(`__dirname:  ${__dirname}`); // path current JS file resides
console.log(`./: ${process.cwd()}`); // path current working directory

/*
 * Application Variables
*/
const app = express();
const port = process.env.PORT || 8000;

/*
 * Application Level Middlewares
*/
app.use(morgan('tiny'));

// serve static files with specified paths & setting property
app.use(express.static('./src/UI'));
app.set('views', './src/UI');
app.set('view engine', 'html');

const poiRouter = require('./routes/poiRoutes');

app.use('/poi', poiRouter); // http://localhost:8000/poi

// routes HTTP GET requests to specified path with specified callback function
app.get('/', (req, res) => {
    res.render( // renders view as absolute path or relative path to 'views' setting
        'index'
    );
});

app.listen(port, () => {
    debug(`Map Demo Application running on ${chalk.green(port)}...`);
});
