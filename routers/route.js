const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const commentlist = require('../models/commentlist');

const subcommentlist = require('../models/subcommentlist');


router.get('/commentlists',(req,res)=>{
    
    commentlist.find(function(err,commentlist){
    res.json(commentlist);
}).sort({"_id": -1});
});
;

router.post('/commentlist',function(req,res){
    let newcommentlist = new commentlist({
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    comment: req.body.comment,
    like_count: '0',
    comment_count: '0',
    date: req.body.date,
   
    });

    newcommentlist.save(function(err,newcommentlist){
if(err){
    res.json({msg: 'fail to add comment'});
}else
{
    res.json({msg: 'comment added sucessfully'});
}
    });
    });



    router.get('/subcommentlists',(req,res)=>{
    
        subcommentlist.find(function(err,subcommentlist){
        res.json(subcommentlist);
    });
    });
    ;
    
    router.post('/subcommentlist',function(req,res){
        let newsubcommentlist = new subcommentlist({
        postuser_name: req.body.postuser_name,
        postlast_name: req.body.postlast_name,
        postcomment: req.body.postcomment,
        user_name: req.body.user_name,
        last_name: req.body.last_name,
        comment: req.body.comment,
        like_count: '0',
        comment_count: '0',
        date: req.body.date,
        });
    
        newsubcommentlist.save(function(err,newsubcommentlist){
    if(err){
        res.json({msg: 'fail to add comment'});
    }else
    {
        res.json({msg: 'comment added sucessfully'});
    }
        });
        })

        router.put('/likeupdate',function(request,response){

            commentlist.updateOne({ id:request.body._id, comment:request.body.comment},{ like_count:parseInt(request.body.like_count)+1 }, function(err,countlist){
                            
                       if(err){
                        response.status(500).send({error:"could not add items to count"});
                   }else{
                        response.send(countlist);
                    }                                               
                     });
                    });
     

                    router.put('/commentupdate',function(request,response){

                        commentlist.updateOne({ id:request.body._postid, comment:request.body.postcomment},{ comment_count:parseInt(request.body.postcomment_count)+1 }, function(err,countlist){
                                        
                                   if(err){
                                    response.status(500).send({error:"could not add items to count"});
                               }else{
                                    response.send(countlist);
                                }                                               
                                 });
                                });
                 
                                router.put('/sublikeupdate',function(request,response){

                                    subcommentlist.updateOne({ id:request.body._id,user_name:request.body.user_name, comment:request.body.comment},{ like_count:parseInt(request.body.like_count)+1 }, function(err,countlist){
                                                    
                                               if(err){
                                                response.status(500).send({error:"could not add items to count"});
                                           }else{
                                                response.send(countlist);
                                            }                                               
                                             });
                                            });

    

module.exports = router;
