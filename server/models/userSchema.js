var mongoose=require('mongoose');
var schema=mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var userSchema=new schema({
    fullName:{type:String},
    username:{type:String},
    password:{type:String}
});
userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model('User',userSchema);
