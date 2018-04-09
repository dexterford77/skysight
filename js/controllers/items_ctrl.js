skysight.controller("ItemCtrl", ['$scope',
  function($scope) {

    $scope.price = 0;

    $scope.frame1Active = false;
    $scope.frame2Active = false;
    $scope.frame3Active = false;
    $scope.lens1Active = false;
    $scope.lens2Active = false;
    $scope.tint1Active = false;
    $scope.tint2Active = false;
    $scope.tint3Active = false;

    $scope.activate = function(item) {
      $scope.price += 50;
      if (item === 'frame1') {
        $scope.frame1Active = !$scope.frame1Active;
        $scope.frame2Active = false;
        $scope.frame3Active = false;
      } else if (item === 'frame2') {
        $scope.frame2Active = !$scope.frame2Active;
        $scope.frame1Active = false;
        $scope.frame3Active = false;
      } else if (item === 'frame3') {
        $scope.frame3Active = !$scope.frame3Active;
        $scope.frame2Active = false;
        $scope.frame1Active = false;
      } else if (item === 'lens1') {
        $scope.lens1Active = !$scope.lens1Active;
        $scope.lens2Active = false;
      } else if (item === 'lens2') {
        $scope.lens2Active = !$scope.lens2Active;
        $scope.lens1Active = false;
      } else if (item === 'tint1') {
        $scope.tint1Active = !$scope.tint1Active;
        $scope.tint2Active = false;
        $scope.tint3Active = false;
      } else if (item === 'tint2') {
        $scope.tint2Active = !$scope.tint2Active;
        $scope.tint1Active = false;
        $scope.tint3Active = false;
      } else if (item === 'tint3') {
        $scope.tint3Active = !$scope.tint3Active;
        $scope.tint2Active = false;
        $scope.tint1Active = false;
      }
    }

}]);