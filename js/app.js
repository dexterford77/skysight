var skysight = angular.module("skysight", ['ui.router']);

skysight.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "js/templates/home.html"
  }).state("inventory", {
    url: "/inventory",
    templateUrl: "js/templates/inventory.html"
  }).state("about", {
    url: "/about",
    templateUrl: "js/templates/about.html"
  }).state("contact", {
    url: "/contact",
    templateUrl: "js/templates/contact.html"
  }).state("vendors", {
    url: "/vendors",
    templateUrl: "js/templates/vendors.html"
  }).state("lightdarkviews", {
    url: "/lightdarkviews",
    templateUrl: "js/templates/light_darkviews.html"
  });
});

skysight.run(['$rootScope', function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);