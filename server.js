var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

var app = new express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect(config.database,function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Database is connected!");
    }
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app,express,io);
app.use('/api',api);


app.get('*', function(req,res){
    res.sendFile(__dirname + '/public/app/views/index.html');
})

http.listen(config.port,function(err)
{
  if(err){
    console.log(err);
  } else {
      console.log("Listening on port 3000");
  }
});
