/*
var http = require('http');
var app = require('./config/express')();
const url = 'mongodb://dswa5:dswa5@cluster0-shard-00-00.aoz22.mongodb.net:27017,cluster0-shard-00-01.aoz22.mongodb.net:27017,cluster0-shard-00-02.aoz22.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-12vniy-shard-0&authSource=admin&retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});


var http = require('http');
var express = require('express');
var app = express();
require('./config/express')(app);
require('./config/passport')();
require('./config/database')('mongodb://localhost/contatooh');
http.createServer(app).listen(app.get('port'), function(){
console.log('Express Server escutando na porta ' + app.get('port'));
});

*/

var http = require('http');
var express = require('express');
var app = require('./config/express')();
//const url = 'mongodb://dswa5:dswa5@cluster0-shard-00-00.aoz22.mongodb.net:27017,cluster0-shard-00-01.aoz22.mongodb.net:27017,cluster0-shard-00-02.aoz22.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-12vniy-shard-0&authSource=admin&retryWrites=true&w=majority';
require('./config/passport')();
require('./config/database')('mongodb://dswa5:dswa5@cluster0-shard-00-00.aoz22.mongodb.net:27017,cluster0-shard-00-01.aoz22.mongodb.net:27017,cluster0-shard-00-02.aoz22.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-12vniy-shard-0&authSource=admin&retryWrites=true&w=majority');
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});