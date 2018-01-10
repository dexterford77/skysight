skysight.controller("ProductsIndexCtrl", ['$scope', 'ProductService',
  function($scope, ProductService) {

    $scope.products = ProductService.all();

}]);