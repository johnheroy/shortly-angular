describe('ShortenController', function () {
  var $scope, $rootScope, $location, createController, httpMock, Links;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    httpMock = $injector.get('$httpBackend');
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
    };
    createController();

  }));

  afterEach(function() {
    httpMock.verifyNoOutstandingExpectation();
    httpMock.verifyNoOutstandingRequest();
  });

  it('should have a data property on the $scope', function() {
    expect($scope.link).to.be.an('object');
  });

  it('should have a getLinks methood on the $scope', function () {
    expect($scope.addLink).to.be.a('function');
  });

  it('should be able to create new links', function () {
    httpMock.expectPOST("api/links").respond(201, '');
    $scope.getLinks();
    httpMock.flush();
    expect($scope.loading).to.be(false);
  });
});
