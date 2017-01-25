app.factory('topicFactory',['$http', '$routeParams', function($http, $routeParams){
  var factory = {};

  factory.showcategory = function(callback){
    console.log('here2')
    $http.get('/showcategory')
    .then(
      function(result){
        console.log(result)
        callback(result)
      }
    )
  }

  factory.createTopic = function(topic, callback){
    $http.post('/createtopic', topic)
    .then(
      function(result){
        callback(result)
      }
    )
  }

  factory.showtopic = function(callback){
    $http.get('/showtopic')
    .then(
      function(result){
        callback(result)
      }
    )
  }

  factory.showOnetopic = function(callback){
      console.log('hey')
    $http.get('/showOnetopic/'+$routeParams.id)
    .then(
      function(result){
        callback(result)
      }
    )
  }




//==================== CREATE A CATEGORY FUNCTION ===================//
  // factory.createCat = function(category, callback){
  //   $http.post('/createCat', category)
  //   .then(
  //     function(result){
  //       console.log(result)
  //     }
  //   )
  // }
//==================== ============================= =================//
  return factory

}]);
