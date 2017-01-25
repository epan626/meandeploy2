app.controller('topicController', ['$scope', 'userFactory', 'topicFactory', 'postFactory', '$routeParams', '$location', '$cookies', function($scope, userFactory, topicFactory, postFactory, $routeParams, $location, $cookies){
  $scope.loggeduser = {};
  $scope.categories =[];
  $scope.topics = [];
  $scope.post = [];
//   $scope.users =[]
  var cookie = $cookies.get('cookieloggeduser')

  var showOnetopic = function() {
    topicFactory.showOnetopic(function(result){
      console.log(result.data)
      $scope.topics = result.data
    })
  }
  showOnetopic()

  $scope.createpost = function(){
    $scope.topic.topicid = $routeParams.id
    $scope.topic.posterid = cookie
    console.log($scope.topic)
    postFactory.createpost($scope.topic, function(result){
      console.log(result.data)
      showpost();
    })
  }
  var showpost = function() {
    postFactory.showpost(function(result){
      $scope.posts = result.data
    })
  }
showpost();

$scope.createcomment = function(post, comment) {
  post.tempcomment = comment
  post.tempcommenterid = cookie
  console.log(post)
  postFactory.createcomment(post, function(result){
    console.log(result)
    showpost()
  })
}
$scope.logout = function() {
  $cookies.remove('cookieloggeduser')
  $location.url('/')
}

$scope.upvote = function(post) {
  var upvote = {}
  upvote.postid = post._id
  upvote.user = cookie
  userFactory.upvote(upvote, function(result){
    console.log(result)
      showpost()
  })
}

$scope.downvote = function(post){
  var downvote = {}
  downvote.postid = post._id
  downvote.user = cookie
  console.log(downvote)
  userFactory.downvote(downvote, function(result){
    console.log(result)
    showpost()
  })
}
}]);
