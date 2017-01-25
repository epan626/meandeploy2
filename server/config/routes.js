var mongoose = require('mongoose');
// var Product = require('../controllers/productControllerS.js');
var Post = require('../controllers/postControllerS.js');
var User = require('../controllers/userControllerS.js');
var Topic = require('../controllers/topicControllerS.js');


module.exports = function(app){
  app.post('/add', function(req, res){
    User.addUser(req, res)
  })
  app.post('/login', function(req, res){
    User.login(req, res)
  })
  app.get('/loggeduser/:id', function(req, res){
    User.loggeduser(req, res)
  })
  app.get('/showcategory', function(req, res){
    Topic.showcategory(req, res)
  })
  app.post('/createtopic', function(req, res){
    Topic.createtopic(req, res)
  })
  app.get('/showtopic', function(req, res){
    Topic.showtopic(req, res)
  })
  app.get('/showOnetopic/:id', function(req, res){
    Topic.showOnetopic(req, res)
  })
  app.post('/createpost', function(req, res){
    Post.createpost(req, res)
  })
  app.get('/showpost/:id', function(req, res){
    Post.showpost(req, res)
  })
  app.post('/createcomment', function(req, res){
    Post.createcomment(req, res)
  })
  app.get('/showuser/:id', function(req, res){
    User.showuser(req, res)
  })
  app.put('/upvote', function(req, res){
    User.upvote(req, res)
  })
  app.put('/downvote', function(req, res){
    User.downvote(req, res)
  })
  //==================== CREATE A CATEGORY FUNCTION ===================//
  // app.post('/createCat', function(req, res){
  //   Topic.createcat(req, res)
  // })
  //==================== ============================= =================//
}
