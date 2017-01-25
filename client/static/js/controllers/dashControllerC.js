app.controller('dashController', ['$scope', 'userFactory', 'topicFactory', '$routeParams', '$location', '$cookies', function($scope, userFactory, topicFactory, $routeParams, $location, $cookies){
  $scope.loggeduser = {};
  $scope.categories =[];
  $scope.topics = [];
//   $scope.users =[]
  var cookie = $cookies.get('cookieloggeduser')
//   console.log(cookie)

  var showloggeduser = function() {
    userFactory.loggeduser(cookie, function(result){
      $scope.loggeduser = result
      console.log('down')
  console.log($scope.loggeduser)
    })
  }
  showloggeduser()
  $scope.createTopic = function (){

    $scope.topic._user = $scope.loggeduser._id
    $scope.topic.username= $scope.loggeduser.username
    console.log($scope.topic)
    topicFactory.createTopic($scope.topic, function(result){
      showtopics();
    })
    }
    var showtopics = function() {
      topicFactory.showtopic(function(result){
        console.log(result.data)
        console.log('up')
        $scope.topics = result.data
      })
    }
showtopics();
  //==================== CREATE A CATEGORY FUNCTION ===================//
  // topicFactory.createCat($scope.category, function(result){
  //
  // })
  var showcategory = function(){
    console.log('here1')
    topicFactory.showcategory(function(result){
      console.log(result.data)
      $scope.categories = result.data
    })
  }
  showcategory()

  $scope.logout = function() {
    $cookies.remove('cookieloggeduser')
    $location.url('/')
  }

}]);
