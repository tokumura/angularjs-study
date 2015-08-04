var myApp = angular.module('myApp',[]);
myApp.controller('HelloController', ['$scope', function($scope) {
  $scope.greeting = { text: "Hello" }
}]);

var cartApp = angular.module('cartApp',[]);
cartApp.controller('CartController', ['$scope', function($scope) {
  $scope.items = [
    {title: "Kingdom", quantity: 39, price: 500},
    {title: "Giant Killing", quantity: 35, price: 480},
    {title: "Real", quantity: 15, price: 500}
  ];
  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  }
}]);
