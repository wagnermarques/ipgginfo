/*jslint es6:true*/
let path = require("path");
let webapp = require("./server/server-express.js").webapp;
//var persistence = require("./server/firebase-features.js").persistence;


webapp.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + './../views/index.html'));
});

