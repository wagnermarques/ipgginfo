let express = require('express');
let appExpress = express();
const PORT = process.env.PORT || 5000
let path = require("path");
let fs = require("fs");
let inspect = require('object-inspect');

let http = require('http').Server(appExpress);

const bodyParser = require('body-parser');

const middlewares = [
    express.static(path.join(__dirname, 'dist/static')),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];

//appExpress.use(express.static());
appExpress.use(middlewares);

delete(appExpress.cache);

//https://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
//Heroku dynamically assigns your app a port, so you can't set the port to a fixed number. Heroku adds the port to the env
http.listen( PORT => console.log("Listening on port ${ PORT }") )

exports.webapp = appExpress;

