skysight.controller("NavCtrl", ['$scope', '$state',
  function($scope, $state) {

    $scope.init = function(){
      $scope.makeCurrentStateBlue();
    }

    $scope.imgsrcs = {};

    $scope.greys = {
      "home": "assets/navbar/setup_r2_c1.jpg",
      "products": "assets/navbar/setup_r2_c2.jpg",
      "about": "assets/navbar/setup_r2_c3.jpg",
      "contact": "assets/navbar/setup_r2_c4.jpg",
      "vendors": "assets/navbar/setup_r2_c7.jpg"
    };

    $scope.blues = {
      "home": "assets/navbar/Skysightweb_r2_c1.jpg",
      "products": "assets/navbar/Skysightweb_r2_c2.jpg",
      "about": "assets/navbar/Skysightweb_r2_c3.jpg",
      "contact": "assets/navbar/Skysightweb_r2_c4.jpg",
      "vendors": "assets/navbar/Skysightweb_r2_c7.jpg"
    };

    $scope.makeCurrentStateBlue = function(){
      var srcs = angular.copy($scope.greys);
      srcs[$scope.currentState] = $scope.blues[$scope.currentState];
      $scope.imgsrcs = srcs;
    }

    $scope.$watch(function(){
      return $state.$current.name
    }, function(newVal, oldVal){
      $scope.currentState = newVal;
      $scope.makeCurrentStateBlue();
    });

}]);