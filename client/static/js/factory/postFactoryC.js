app.factory('postFactory',['$http', '$routeParams', function($http, $routeParams){
  var factory = {};

  factory.createpost = function(post, callback){
    $http.post('/createpost', post)
    .then(
        function(result){
          callback(result.data)
        }
      )
  }
  factory.showpost = function(callback){
    $http.get('/showpost/'+$routeParams.id)
    .then(
      function(result){
        callback(result)
      }
    )
  }

  factory.createcomment = function(comment, callback){
    console.log('here2')
    $http.post('/createcomment', comment)
    .then(
        function(result){
          callback()
        }
      )
  }
  // factory.showcategory = function(callback){
  //   console.log('her
  //   $http.get('/showcategory')
  //   .then(
  //     function(result){
  //       console.log(result)
  //       callback(result)
  //     }
  //   )
  // }
  //
  // factory.createTopic = function(topic, callback){
  //   $http.post('/createtopic', topic)
  //   .then(
  //     function(result){
  //       callback(result)
  //     }
  //   )
  // }
  //
  // factory.showtopic = function(callback){
  //   $http.get('/showtopic')
  //   .then(
  //     function(result){
  //       callback(result)
  //     }
  //   )
  // }
  //
  // factory.showOnetopic = function(callback){
  //   $http.get('/showOnetopic/'+$routeParams.id)
  //   .then(
  //     function(result){
  //       callback(result)
  //     }
  //   )
  // }

  return factory

}]);
