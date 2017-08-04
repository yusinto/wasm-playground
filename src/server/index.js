require('babel-register');
require('babel-polyfill');

const blueBird = require('bluebird');
global.Promise = blueBird;

require('isomorphic-fetch');
require('./server.js');
