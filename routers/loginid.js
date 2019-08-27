const express = require('express');
const login = express.Router();
const jwt = require('jsonwebtoken');
const loginid = require('../models/login');




login.post('/signup',function(req,res){
    let newuser = new loginid({
   user_name: req.body.user_name,
   password: req.body.password,
   address: req.body.address,
   dob: req.body.dob,
   phone_no: req.body.phone_no,
   first_name: req.body.first_name,
   last_name: req.body.last_name,
   gender: req.body.gender,
    });
    newuser.save(function(err,newuser){
        if(err){
            res.json({msg: 'fail to add you'});
        }else
        {
          //  res.json({msg: 'signup add sucessfully'});
             let payload ={subject: newuser._id };
             let token = jwt.sign(payload,'secretkey');
             res.status(200).send({token});
        
        }
            });
});


login.get('/gg',(req,res)=>{
    
    loginid.find(function(err,loginid){
    res.json(loginid);
});
});


login.post('/login', function(request,response){
    loginid.findOne({user_name: request.body.user_name,password:request.body.password},function(err,userdata){
        
        if(err||!userdata){
            response.status(500).send({err});
          //  response.status(500).send({error:"could not find data....."});
        }else{
            //response.json({msg: 'login check sucessfully'});
             let payload ={subject: userdata._id };
             let token = jwt.sign(payload,'secretkey');
             response.status(200).send({token});
               
            }                                               
            
       
    });
});

login.post('/getcurrentuser', function(request,response){

    var decoded = jwt.decode(request.body.token);
    //response.json(decoded.subject);
    loginid.findOne({_id: decoded.subject},function(err,userdata){
         if(err||!userdata){
            response.status(500).send({error:"could not find data....."});
        }else{
           
             response.json(userdata);
               
            }                                               
            
       
    });
})


module.exports = login;
