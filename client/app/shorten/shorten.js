angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Link) {
  $scope.link = {};
  $scope.addLink = function () {
    $scope.loading = true;
    Link.addLink($scope.link)
      .then(function () {
        $scope.loading = false;
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

});
