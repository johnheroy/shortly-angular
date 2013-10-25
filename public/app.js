angular.module('myApp', [])
.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'templates/home.html'
  })
  .when('/shorten', {
    controller: 'ShortenCtrl',
    templateUrl: 'templates/shorten.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
.factory('Shortly', function($http, $q) {
  var url = "http://localhost:4567";

  return {
    all: function() {
      var d = $q.defer();
      $http.get('/links')
      .success(function(data, status) {
        d.resolve(data);
      }).error(function(data, status) {
        d.reject(data);
      });

      return d.promise;
    },
    create: function(url) {
      var d = $q.defer();
      $http.post('/links', {
        url: url
      }).success(function(data) {
        d.resolve(data);
      }).error(function(data) {
        d.reject(data);
      });
      return d.promise;
    }
  }
})
.controller('HomeCtrl', function($scope, Shortly) {
  $scope.links = Shortly.all();
})
.controller('ShortenCtrl', function($scope, $location, Shortly) {
  $scope.shorten = function() {
    if ($scope.link.text) {
      Shortly.create($scope.link.text)
        .then(function(data) {
          $scope.link = {};
          $location.path('/');
        });
    }
  }
});