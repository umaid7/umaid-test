var User=require('../models/userSchema');
var config=require('../db/utils.js');
var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res) {
    console.log("hejej");
    var newUser=new User({
        fullName:req.body.fullName,
        username:req.body.username,
        password:req.body.password
    })
console.log(newUser);
    newUser.save(function(err){
        console.log('hello');
        if(err){
            res.send(err);
            return
        }
        else{
            res.json({message:'user created'})
        }
    })


        //res.json("hello");
    // res.render('index', { title: 'HOME' });
});

module.exports=router;