/* START SOLUTION */
angular.module('shortly', ['ngAnimate', 'fx.animations', 'ngRoute'])
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
  var url = "http://localhost:4568";

  return {
    all: function() {
      return $http({
        method: 'GET',
        url: url + '/links'
      }).then(function (data) {
        return data.data
      });
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
.controller('HomeCtrl', function($scope, $timeout, Shortly) {
  $scope.links = [];
  $scope.loading = true;
  $timeout(function () {}, 1000)
    .then(function () {
      return Shortly.all()
    })
    .then(function (links) {
      angular.forEach(links, function(link) {
        $scope.links.push(link);
      });
      $scope.loading = false;
    });
  $scope.name = 'Home';
})
.controller('ShortenCtrl', function($scope, $location, Shortly) {
  $scope.shorten = function(valid) {
    if (valid) {
      Shortly.create($scope.link.text)
        .then(function(data) {
          $scope.link = {};
          $location.path('/');
        });
    }
  }
});
/* END SOLUTION */
/* START SOLUTION */
angular.module('shortly', ['ngAnimate', 'fx.animations', 'ngRoute'])
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
  var url = "http://localhost:4568";

  return {
    all: function() {
      return $http({
        method: 'GET',
        url: url + '/links'
      }).then(function (data) {
        return data.data
      });
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
.controller('HomeCtrl', function($scope, $timeout, Shortly) {
  $scope.links = [];
  $scope.loading = true;
  $timeout(function () {}, 1000)
    .then(function () {
      return Shortly.all()
    })
    .then(function (links) {
      angular.forEach(links, function(link) {
        $scope.links.push(link);
      });
      $scope.loading = false;
    });
  $scope.name = 'Home';
})
.controller('ShortenCtrl', function($scope, $location, Shortly) {
  $scope.shorten = function(valid) {
    if (valid) {
      Shortly.create($scope.link.text)
        .then(function(data) {
          $scope.link = {};
          $location.path('/');
        });
    }
  }
});
/* END SOLUTION */
/* START SOLUTION */
angular.module('shortly', ['ngAnimate', 'fx.animations', 'ngRoute'])
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
  var url = "http://localhost:4568";

  return {
    all: function() {
      return $http({
        method: 'GET',
        url: url + '/links'
      }).then(function (data) {
        return data.data
      });
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
.controller('HomeCtrl', function($scope, $timeout, Shortly) {
  $scope.links = [];
  $scope.loading = true;
  $timeout(function () {}, 1000)
    .then(function () {
      return Shortly.all()
    })
    .then(function (links) {
      angular.forEach(links, function(link) {
        $scope.links.push(link);
      });
      $scope.loading = false;
    });
  $scope.name = 'Home';
})
.controller('ShortenCtrl', function($scope, $location, Shortly) {
  $scope.shorten = function(valid) {
    if (valid) {
      Shortly.create($scope.link.text)
        .then(function(data) {
          $scope.link = {};
          $location.path('/');
        });
    }
  }
});
/* END SOLUTION */