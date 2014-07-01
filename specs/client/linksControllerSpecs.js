"use strict";

describe('LinkController', function () {
  var $scope, $rootScope, createController, Links, httpMock;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    httpMock = $injector.get('$httpBackend');
    Links = $injector.get('Links');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('LinksController', {
        $scope: $scope,
        Links: Links
      });
    };
    createController();

  }));

  it('should have a data property on the $scope', function() {
    expect($scope.data).to.be.an('object');
  });

  it('should have a getLinks methood on the $scope', function () {
    expect($scope.getLinks).to.be.a('function');
  });

  it('should be able to get links and set to $scope.data.links', function () {
    var links = [{},{},{}];
    httpMock.expectGET("/api/links").respond(links);
    $scope.getLinks();
    httpMock.flush();
    expect($scope.data.links).to.eql(links);
  });
});
