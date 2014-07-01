angular.module('shortly.links', [])

.controller('LinksController', function ($scope, links) {
  $scope.data = {};
  $scope.data.links = links;
});
