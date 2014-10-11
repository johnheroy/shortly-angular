angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};

  $scope.addLink = function(){
    $http.post('/api/links', JSON.stringify($scope.link)).success(function(data, status, headers, config){
      $scope.link.url = '';
    }).error(function(data, status, headers, config){
      console.error('there was an error yo');
    });
  }

});
