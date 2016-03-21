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
          res.json({status:true,messageCode:1,message: 'User created'})
        }
      })
    }
  })

});

router.get('/logout', function(req, res) {
  req.session.destroy();
  res.json({status:true,message: 'User LogOut'})
});

router.get('/signin', function(req, res) {
  sess = req.session;
  console.log(sess);
  if(sess.username) {
    res.write('<h1>Already logged In,Please log Out first</h1>');
    res.end('<a href="logout">Log Out</a>');
  }
  else
  {
    res.redirect('/#' + req.originalUrl);
  }
});

router.post('/signin', function(req, res) {
  console.log(req.body);

    User.findOne({'username': req.body.username, 'password': req.body.password}, function (err, user1) {
      // In case of any error, return using the done method
      if (err) {
        console.log('Error in SignIn: ' + err);
        res.send({success: false, message: 'Internal Error', error: err});
      }
      console.log(user1);
      if (user1 != null) {
        req.session.username = user1.username;
        res.send({success: true});
      }
      else {
        console.log('Incorrect Credentials');
        res.send({success: false, message: 'Incorrent Username and Password'});
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
    res.end('<a href="signin">Sign In</a>');
  }
})


router.get('/*', function(req, res) {
  res.render("index.html");
});
module.exports = router;
