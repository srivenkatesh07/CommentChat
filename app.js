var express = require('express');
var bodyParser= require('body-parser');
const path =require('path');
var mongoose=require('mongoose');
var cors = require('cors');
const route = require('./routers/route'); 
const loginid = require('./routers/loginid'); 
var app = express();

mongoose.connect('mongodb://localhost:27017/comment');
mongoose.connection.on('connected',function(){
console.log('connected to dadabase mongo @ 27017');
});

mongoose.connection.on('error',function(err){
    if(err){
    console.log('error in dadabase connection',+err);
    }
    
});



const port = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());


app.use('/api',route,loginid);

app.use(express.static(__dirname+'/dist'));

app.get('/*',function(req, res){
    console.log('consol listening');
    res.sendFile(path.join(__dirname , '/src/index.html'));
});

app.listen(port,function(){
    console.log("comment database api is running at 3000....");
});
