app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  // var users = [];
  var factory = {};
  // var one = [];
  var loggeduser = {}
  //
  factory.add = function(user, callback){
    console.log('here')
    console.log(user)
    $http.post('/add', user)
    .then(
      function(result){
        callback(result.data)
      });
  }
  factory.login = function(user, callback){
    console.log('here2')
    $http.post('/login', user)
    .then(
      function(result){
        console.log('back')
        if(typeof result.data === 'string'){
          callback(result)
        }
        else {
          loggeduser = result.data[0]
          callback(result.data[0])
        }
      });
  }
  factory.loggeduser = function(cookie, callback){
    $http.get('/loggeduser/' + cookie)
    .then(
      function(result){
        callback(result.data[0])
      }
    )
  }
  factory.logout = function(){
    loggeduser = {}
  }

  factory.showuser = function(callback){
    $http.get('/showuser/'+$routeParams.id)
    .then(
      function(result){
        callback(result)
      }
    )
  }

  factory.upvote = function(upvote, callback){
    $http.put('/upvote', upvote)
    .then(
      function(result){
        callback(result)
      }
    )
  }

  factory.downvote = function(downvote, callback){
    $http.put('/downvote', downvote)
    .then(
      function(result){
        callback(result)
      }
    )
  }

  return factory

}])
