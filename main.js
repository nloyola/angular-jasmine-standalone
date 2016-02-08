var app = angular.module("myApp", []);

app.directive('myDirective', function () {
  var directive = {
    restrict: 'E',
    scope: {},
    bindToController: {
      name: '@'
    },
    template: '<div>Hello {{vm.name}}</div>',
    controller: MyDirectiveCtrl,
    controllerAs: 'vm'
  };
  return directive;
});

function MyDirectiveCtrl() {
  var vm = this;

  console.log('vm', vm);
}

// ---SPECS-------------------------

describe('Directive: myDirective', function () {
  var element,
      name = 'Homer';

  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $compile) {
    var scope = $rootScope.$new();

    element = angular.element('<my-directive name="' + name + '"></my-directive>');
    $compile(element)(scope);
    scope.$digest();
  }));

  it('has valid scope', function () {
    var controller = element.controller('myDirective');
    expect(element.text()).toBe('Hello ' + name);
  });

  it('has valid text', function () {
    var controller = element.controller('myDirective');
    expect(element.text()).toBe('Hello ' + name);
  });
});
