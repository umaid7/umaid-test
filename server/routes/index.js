var User=require('../models/userSchema');
var config=require('../db/utils.js');
var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res) {
  console.log(req.body);
  var newUser=new User({
    fullName:req.body.fullName,
    username:req.body.username,
    password:req.body.password
  })
  console.log(newUser);
  User.findOne({'username': req.body.username}, function (err, user1) {
    // In case of any error, return using the done method
    if (err) {
      console.log('Error in SignUp: ' + err);
      res.send({success: false, message: 'Internal Error', error: err});
    }
    // already exists
    if (user1) {
      console.log('User already exists with username: ');
      res.send({success: false,messageCode:2, message: 'User already exists with username'});
    } else {
      newUser.save(function(err) {
        if (err) {
          res.send(err);
          return
        }
        else {
          //req.session.username = newUser.username;
          res.json({status:true,messageCode:1,message: 'User created'})
        }
      })
    }
  })

});

router.get('/home',function(req,res){
  sess = req.session;
  console.log(sess);
  if(sess.username) {
    /*
     * This line check Session existence.
     */
    res.redirect('/#' + req.originalUrl);
  }
  else {
    res.write('<h1>Oops! Please Login First.</h1>');
    res.end('<a href="signup">Sign In</a>');
  }
})


router.get('/*', function(req, res) {
  res.render("index.html");
});
module.exports = router;
