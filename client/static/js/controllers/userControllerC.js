app.controller('userController', ['$scope', 'userFactory', '$routeParams', '$location', '$cookies', function($scope, userFactory, $routeParams, $location, $cookies){
  $scope.loggeduser = {};
  $scope.user =[]
  var cookie = $cookies.get('cookieloggeduser')

var showuser = function() {
  userFactory.showuser(function(result) {
    $scope.user = result.data
  })
}
showuser()

$scope.logout = function() {
  $cookies.remove('cookieloggeduser')
  $location.url('/')
}
}]);
