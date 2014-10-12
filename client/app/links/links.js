angular.module('shortly.links', [])

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
});
