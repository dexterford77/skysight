skysight.controller("ItemCtrl", ['$scope', '$document', "$window",
  function($scope, $document, $window) {

    // on click, add selected item to obj + clear all currently-active
    // this obj has preset attrs, currently blank vals
    // read obj, accordingly "activate" current vals
    // sum up their vals into price variable

    $scope.cart = {
      frame: "",
      lens: "",
      tint: "",
      name: "",
      email: "",
      message: ""
    }

    $scope.frame1Active = false;
    $scope.frame2Active = false;
    $scope.lens1Active = false;
    $scope.lens2Active = false;
    $scope.lens3Active = false;
    $scope.tint1Active = false;
    $scope.tint2Active = false;

    $scope.activate = function(item) {
      $scope.price += 50;
      if (item === 'frame1') {
        $scope.frame1Active = !$scope.frame1Active;
        $scope.frame2Active = false;
        if ($scope.cart.frame !== "Ray-Ban Aviators") {
          $scope.cart.frame = "Ray-Ban Aviators";
        } else {
          $scope.cart.frame = "";
        }
      } else if (item === 'frame2') {
        $scope.frame2Active = !$scope.frame2Active;
        $scope.frame1Active = false;
        if ($scope.cart.frame !== "Generic Aviators") {
          $scope.cart.frame = "Generic Aviators";
        } else {
          $scope.cart.frame = "";
        }
      } else if (item === 'lens1') {
        $scope.lens1Active = !$scope.lens1Active;
        $scope.lens2Active = false;
        $scope.lens3Active = false;
        if ($scope.cart.lens !== "Basic") {
          $scope.cart.lens = "Basic";
        } else {
          $scope.cart.lens = "";
        }
      } else if (item === 'lens2') {
        $scope.lens2Active = !$scope.lens2Active;
        $scope.lens1Active = false;
        $scope.lens3Active = false;
        if ($scope.cart.lens !== "Bifocal") {
          $scope.cart.lens = "Bifocal";
        } else {
          $scope.cart.lens = "";
        }
      } else if (item === 'lens3') {
        $scope.lens2Active = false;
        $scope.lens1Active = false;
        $scope.lens3Active = !$scope.lens3Active;
        if ($scope.cart.lens !== "Trifocal") {
          $scope.cart.lens = "Trifocal";
        } else {
          $scope.cart.lens = "";
        }
      } else if (item === 'tint1') {
        $scope.tint1Active = !$scope.tint1Active;
        $scope.tint2Active = false;
        if ($scope.cart.tint !== "Tri-tinted") {
          $scope.cart.tint = "Tri-tinted";
        } else {
          $scope.cart.tint = "";
        }
      } else if (item === 'tint2') {
        $scope.tint2Active = !$scope.tint2Active;
        $scope.tint1Active = false;
        if ($scope.cart.tint !== "Bi-tinted") {
          $scope.cart.tint = "Bi-tinted";
        } else {
          $scope.cart.tint = "";
        }
      }
    }

}]);