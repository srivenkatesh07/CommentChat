const mongoose = require('mongoose');

const commentlistschema = mongoose.Schema({
user_name:{
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
,

first_name:{
    type: String,
    require: true
}
,

last_name:{
    type: String,
    require: true
}
});

const commentlist = module.exports = mongoose.model('commentlist',commentlistschema);
