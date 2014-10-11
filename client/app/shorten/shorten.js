angular.module('shortly.shorten', [])

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

});
