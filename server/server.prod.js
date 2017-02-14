var express=require('express');
var request=require('request');
var http= require('http');
var compression=require('compression');
var bodyParser=require('body-parser');
var path = require('path');

process.env.NODE_ENV = 'production';

const port=3009;
const app=express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('./', { maxAge: 86400000 })); //86400000 means 1 day in miliseconds
app.get('*',function(req,res){
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  } else {
	 console.log("Now serving at http://localhost:" + port);
  }
});
