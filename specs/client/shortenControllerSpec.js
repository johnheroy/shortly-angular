describe('ShortenController', function () {
  var $scope, $rootScope, $locationcreate, Controller, Links;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');

    Links = $injector.get('Links');
    $location = $injector.get('$location');

    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('ShortenController', {
        $scope: $scope,
        Links: Links,
        $location: $location
      });
    }
    createController();

  }));

  it('should have a data property on the $scope', function() {
    expect($scope.link).to.be.an('object');
  });

  it('should have a getLinks methood on the $scope', function () {
    expect($scope.addLink).to.be.a('function');
  });
});
