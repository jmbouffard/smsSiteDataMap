
/**
 * Module dependencies.
 */

/* , src = require('./src')
, www = require('.')

app.use(app.router);
, routes = require('./routes')
  , user = require('./routes/user')
*/

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  /*app.use('/data', express.static(path.join(__dirname, 'data')));
  app.use('/src', express.static(path.join(__dirname, 'src')));
  app.use('/node_modules', express.static(__dirname + 'node_modules'));*/
  app.use('/data', express.static(path.join(__dirname, 'data')));
  app.use('/src', express.static(path.join(__dirname, 'src')));
  app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
  /*app.use('/css', express.static(path.join(__dirname, 'css')));*/
  /*app.use('/css', express.static('css'))*/
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/*app.get('/', src.index);*/
/*app.get('/',function(req,res){
  res.sendfile('index.html');
});*/

app.get('/', function (req, res) {
  res.sendfile('index.html');
})
app.get('/index.html', function (req, res) {
  res.sendfile('index.html');
})
app.get('/root.js', function (req, res) {
  res.sendfile('root.js');
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
