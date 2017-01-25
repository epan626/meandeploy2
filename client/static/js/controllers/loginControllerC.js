app.controller('loginController', ['$scope', 'userFactory', '$routeParams', '$location', '$cookies', function($scope,  userFactory, $routeParams, $location, $cookies){
//   $scope.loggeduser = {}
//   $scope.users =[]
  var cookie = $cookies.get('cookieloggeduser')

  console.log(cookie)
  $scope.enter = function() {
    $scope.messages = [];
       $scope.errors = false;
     if($scope.user==undefined){
       $scope.errors = true;
       $scope.messages.push('Your information is required!')
     }
     if(!$scope.user.first_name){
       $scope.errors = true;
       $scope.messages.push('Your first name is required!')
     }
     if(!$scope.user.last_name){
       $scope.errors = true;
       $scope.messages.push('Your last name is required!')
     }
     if(!$scope.user.username){
       $scope.errors = true;
       $scope.messages.push('Your username is required!')
     }
     if(!$scope.user.password){
       $scope.errors = true;
       $scope.messages.push('Your password is required!')
     }
     if(!$scope.user.conpassword){
       $scope.errors = true;
       $scope.messages.push('Your conformation password is required!')
     }
     if(!$scope.user.password==$scope.user.conpassword){
       $scope.errors = true;
       $scope.messages.push('Your password must match!')
     } else{
       console.log('here')
       if($scope.errors == false){
            userFactory.add($scope.user, function(result){
              if(typeof(result) === 'string'){
                $scope.errors = true;
                $scope.messages.push(result);
              } else {
                console.log(result)
                $cookies.put('cookieloggeduser', result._id)
                $location.url('/dashboard')
              }
            })
          }
     }
  }
  $scope.login = function(){
    $scope.messages= []
    $scope.errors = false;
    if(!$scope.one==undefined){
      $scope.errors=true;
      $scope.messages.push('Your information is required!')
    }
    if(!$scope.one.username){
      $scope.errors=true;
      $scope.messages.push('Your username is required!')
    }
    if(!$scope.one.password){
      $scope.errors=true;
      $scope.messages.push('Your password is required!')
    } else {
      if($scope.errors == false){
           userFactory.login($scope.one, function(result){
             if(typeof(result) === 'string'){
               $scope.errors = true;
               $scope.messages.push(result);
             } else {
               $cookies.put('cookieloggeduser', result._id)
               $location.url('/dashboard')
             }
           })
         }
    }
  }

    $scope.logout = function() {
      $cookies.remove('cookieloggeduser')
      $location.url('/')
    }

}]);
