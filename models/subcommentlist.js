const mongoose = require('mongoose');

const subcommentlistschema = mongoose.Schema({
postuser_name:{
    type: String,
    require: true
},
postlast_name:{
    type: String,
    require: true
},
postcomment:{
    type: String,
    require: true
},
user_name:{
    type: String,
    require: true
},

last_name:{
    type: String,
    require: true
},
comment:{
    type: String,
    require: true
},
like_count:{
    type: String,
    require: true
},

comment_count:{
    type: String,
    require: true
}
,
date:{
    type: String,
    require: true
}
});

const subcommentlist = module.exports = mongoose.model('subcommentlist',subcommentlistschema);
