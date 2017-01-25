var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Category = mongoose.model('Category');

module.exports = {



showcategory: function(req, res){
  Category.find({}, function(err, categories){
    res.json(categories)
  })
},
createtopic: function(req, res){
  console.log('down')
  console.log(req.body._user)
  console.log('down')
  var topic = new Topic({topic: req.body.topic, description: req.body.description, category: req.body.category, _user: req.body._user, username: req.body.username})
  User.find({_id: req.body._user}, function(err, user){
    if(err){
      console.log(err)
    } else {
    user[0]._topic.push(topic)
    user[0].save()
    topic.save(function(err, topic){
    if(err){
      console.log(err)
    } else {
      res.json(topic)
      }
    })
    }
  })
},
showtopic: function(req, res){
  Topic.find({}, function(err, topics){
    console.log(topics)
    res.json(topics)
  })
},

showOnetopic: function(req, res){
  console.log(req.params.id)
  Topic.find({_id: req.params.id}, function(err, topic){
    console.log(topic)
    res.json(topic)
  })
}
//==================== CREATE A CATEGORY FUNCTION ===================//
// createcat: function(req, res){
//   var category = new Category({name: req.body.name})
//   category.save()
//
// }
//==================== ============================= =================//
};
