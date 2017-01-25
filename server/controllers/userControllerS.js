var mongoose = require('mongoose')
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var bcrypt = require('bcrypt');

module.exports = {
  addUser: function(req, res){
    User.find({username: req.body.username}, function(err, user){
      if(!user[0]){
        var hashpw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
        var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, username: req.body.username, password: hashpw})
        user.save(function(err, user){
          console.log('here1')
            if(err){
              console.log(err)
              console.log('error while creating user')
            } else {
              console.log('creating user ' + user)
              res.json(user)
            }
          })
      } else {
        res.json('This email already exist')
      }
    })
  },
  login: function(req, res){
    User.find({username: req.body.username}, function(err, user){
      if(err){
        console.log(err)
        console.log('Error locating user')
      } else {
        if(!user[0]){
          res.json('The username/password is incorrect')
        }
        else if (bcrypt.compareSync(req.body.password, user[0].password) == false){
          res.json('The username/password is incorrect')
        } else {
          console.log(user)
          res.json(user)
        }
      }
    })
  },
  loggeduser: function(req, res){
    User.find({_id: req.params.id}, function(err, user){
      if(err){
        console.log('error locating user')
      } else {
        res.json(user)
      }
    })
  },
  showuser: function(req, res){
    User.find({_id: req.params.id}, function(err, user){
      console.log(user)
      if(user){
        res.json(user)
      }
    })
  },
  upvote: function(req, res){
    User.findOne({_id: req.body.user}, function(err, user){
      if(user){
        console.log('here0')
        console.log(user.likes.length)
        if(user.likes.length==0 && user.dislikes.length==0){
          user.likes.push(req.body.postid)
          user.save()
          Post.update({_id: req.body.postid}, {$inc: {likes: 1}}, function(err, post){
            if(err){
              console.log(err)
            } else{
              res.json()
            }
          })
        } else {
        var change = false;
        for(var x = 0; x<user.likes.length; x++){
          console.log('here1')
          if(user.likes[x] == req.body.postid && change == false){
            change = true;
            console.log('here2')
            user.likes.splice(x, 1)
            Post.update({_id: req.body.postid}, {$inc: {likes: -1}}, function(err, post){
              if(err){
                console.log(err)
              } else {
                user.save()
                res.json()
              }
            })
          }
        }
        for(var i = 0; i<user.dislikes.length; i++){
          console.log('here3')
            if(user.dislikes[i] == req.body.postid && change == false){
            change = true;
            user.dislikes.splice(x, 1)
            user.likes.push(req.body.postid)
            user.save()
            Post.update({_id: req.body.postid}, {$inc: {dislikes: -1, likes: 1}}, function(err, post){
              if(err){
                console.log(err)
              } else {
                res.json()
              }
            })

          }
        }
        if(change == false){
          user.likes.push(req.body.postid)
          console.log('here4')
          user.save()
          Post.update({_id: req.body.postid}, {$inc: {likes: 1}}, function(err, post){
            if(err){
              console.log(err)
            } else {
              res.json('like +1')
            }
          })
        }
      }
  }})

  },
  downvote: function(req, res){
    User.findOne({_id: req.body.user}, function(err, user){
      if(user){
        console.log('here0')
        console.log(user.likes.length)
        if(user.likes.length==0 && user.dislikes.length==0){
          user.dislikes.push(req.body.postid)
          user.save()
          Post.update({_id: req.body.postid}, {$inc: {dislikes: 1}}, function(err, post){
            if(err){
              console.log(err)
            } else{
              res.json()
            }
          })
        } else {
        var change = false;
        for(var x = 0; x<user.likes.length; x++){
          console.log('here1')
          if(user.likes[x] == req.body.postid && change == false){
            change = true;
            console.log('here2')
            user.likes.splice(x, 1)
            user.dislikes.push(req.body.postid)
            Post.update({_id: req.body.postid}, {$inc: {likes: -1, dislikes: 1}}, function(err, post){
              if(err){
                console.log(err)
              } else {
                user.save()
                res.json()
              }
            })
          }
        }
        for(var i = 0; i<user.dislikes.length; i++){
          console.log('here3')
            if(user.dislikes[i] == req.body.postid && change == false){
              console.log('here4')
            change = true;
            user.dislikes.splice(i, 1)
            user.save()
            Post.update({_id: req.body.postid}, {$inc: {dislikes: -1}}, function(err, post){
              if(err){
                console.log(err)
              } else {
                res.json()
              }
            })
          }
        }
        if(change == false){
          user.dislikes.push(req.body.postid)
          console.log('here4')
          user.save()
          Post.update({_id: req.body.postid}, {$inc: {dislikes: 1}}, function(err, post){
            if(err){
              console.log(err)
            } else {
              res.json()
            }
          })
        }
      }
  }})
  }
};
