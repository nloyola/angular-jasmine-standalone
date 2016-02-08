var app = angular.module("myApp", []);

app.directive('myDrtv', function () {
  return {
    restrict: 'E',
    // Better to externalize to templateUrl, this is for demonstration sake
    template: '<div>Hello {{name}}</div>',
    replace: false
  };
});

// ---SPECS-------------------------

describe('myApp', function () {
  var element,
      name = 'Homer';

  beforeEach(function () {
    module('myApp');
    element = angular.element('<my-drtv/>');
    inject(function ($rootScope, $compile) {
      var scope = $rootScope.$new();
      scope.name = name;
      $compile(element)(scope);
      scope.$digest();
    });
  });

  it('says hello', function () {
    expect(element.text()).toBe('Hello Homer');
  });
});
