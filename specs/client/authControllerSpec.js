describe('AuthController', function () {
  var $scope, $rootScope, createController, Links;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    Links = $injector.get('Links');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('LinksController', {
        $scope: $scope,
        Links: Links
      });
    }
    createController();

  }));

  it('should have a data property on the $scope', function() {
    expect($scope.data).to.be.an('object');
  });

  it('should have a getLinks methood on the $scope', function () {
    expect($scope.getLinks).to.be.a('function');
  });
});
