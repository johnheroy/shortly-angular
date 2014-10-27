angular.module('shortly.shorten', [])
<<<<<<< HEAD

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};

  $scope.addLink = function(){
    if ($scope.form.$valid){
      $http.post('/api/links', JSON.stringify($scope.link)).success(function(data, status, headers, config){
        $scope.link.url = '';
        // thank you your url has been submitted!!!!!!111!11!1!
      }).error(function(data, status, headers, config){
        console.error('there was an error yo');
      });

    }
  }

=======
.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  /* START SOLUTION */
  $scope.link = {};
  $scope.addLink = function () {
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function () {
        $scope.loading = false;
        $location.path('/links');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  /* END SOLUTION */
>>>>>>> fda0fbf86579d2cb980fc9d673715eb7607a3b7c
});
