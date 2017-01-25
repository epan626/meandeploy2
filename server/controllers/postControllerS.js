var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Category = mongoose.model('Category');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment')

module.exports = {
  createpost: function(req, res){
    console.log('down')
    console.log(req.body)
    User.findOne({_id: req.body.posterid}, function(err, user){
      if(user){
        Topic.findOne({_id: req.body.topicid}, function(err, topic){
          if(topic){
            var post = new Post({message: req.body.post, _topic: req.body.topicid, _user: req.body.posterid, username: user.username})
            user._post.push(post)
            user.save()
            topic._post.push(post)
            topic.save()
            post.save()
            res.json(post)
          }
        })
      }
    })
  },
  showpost: function(req, res){
    Post.find({_topic: req.params.id})
    .populate('_comment')
    .exec(function(err, posts){
      if(err){
        console.log('something wrong')
      } else {
        res.json(posts)
      }
    })
  },
  createcomment: function(req, res){
    User.findOne({_id: req.body.tempcommenterid}, function(err, user){
      if(user){
        var comment = new Comment({message: req.body.tempcomment, _post: req.body._id, _user: req.body.tempcommenterid, username: user.username})
        comment.save()
        user._comment.push(comment)
        user.save()
        Post.findOne({_id: req.body._id}, function(err, post){
          if(post){
            post._comment.push(comment)
            post.save()
            res.json(comment)
          } else {
            console.log('problems')
          }
        })
    }
  })
}
};
