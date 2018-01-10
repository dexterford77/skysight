skysight.controller("ProductsShowCtrl", ['$scope', 'ProductService', '$stateParams',
  function($scope, ProductService, $stateParams) {

    $scope.product = ProductService.find($stateParams.id);

}]);