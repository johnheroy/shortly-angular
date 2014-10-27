angular.module('shortly.links', [])

<<<<<<< HEAD
.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};

  $scope.getLinks = function(){
    $http.get('/api/links').success(function(data, status, headers, config){
      $scope.data.links = data;
    }).error(function(data, status, headers, config){
      console.error('there was an error yo');
    });
  }
  $scope.getLinks();
=======
.controller('LinksController', function ($scope, links, $log) {
  // Your code here
  /* START SOLUTION */

  $scope.data = {links: links};
  // $scope.getLinks = function () {
  //   Links.getAll()
  //     .then(function (links) {
  //       $scope.data.links = links;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  // $scope.getLinks();
  /* END SOLUTION */
})
.directive('shortenedLink', function() {
  return {
    restrict: 'E',
    scope: {
      link: '='
    },
    transclusion: true,
    replace: true,
    templateUrl: 'app/links/linksWidget.html',
    link: function(scope, ele, attrs) {

    }
  };
>>>>>>> fda0fbf86579d2cb980fc9d673715eb7607a3b7c
});
