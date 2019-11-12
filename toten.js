var express = require('express');
var toten = express();
var path = require("path");
var http = require('http').Server(toten);

const bodyParser = require('body-parser');
const pathToStaticFiles = path.join('client_public');
console.log(pathToStaticFiles);

const middlewares = [
    express.static(path.join('client_public')),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];

toten.use(middlewares);

toten.get('/', function (req, res) {
    console.log(path.resolve(__dirname + '-/public/index.html'));
    res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

toten.listen(3000, function () {
    console.log('toten on port 3000!');
});
toten.get('/PrototipodeTela2',function(req,res){
    res.sendFile(path.join(__dirname+'/public/PrototipodeTela2.html'));
  });


toten.use(express.static(__dirname + '/public/css/'));
toten.use(express.static(__dirname + '/public/img/'));
