skysight.controller("NavCtrl", ['$scope',
  function($scope) {

    $scope.unfoldNav = function() {
      var x = document.getElementById("myTopnav");
      console.log(x.className);
      if (x.className === "topnav ng-scope") {
          x.className += " responsive";
      } else {
          x.className = "topnav ng-scope";
      }
    }

    

}]);