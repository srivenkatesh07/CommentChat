const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const loginschema = mongoose.Schema({
user_name:{
    type: String,
    require: true
},
password:{
    type: String,
    require: true
},
first_name:{
    type: String,
    require: true
},
last_name:{
    type: String,
    require: true
}
,
address:{
    type: String,
    require: true
},
dob:{
    type: String,
    require: true
},

phone_no:{
    type: String,
    require: true
},
gender:{
    type: String,
    require: true
}
});


const loginid = module.exports = mongoose.model('loginid',loginschema);
