var skysight = angular.module("skysight", ['ui.router', 'ui.bootstrap']);

skysight.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "js/templates/home.html"
  }).state("about", {
    url: "/about",
    templateUrl: "js/templates/about.html"
  }).state("contact", {
    url: "/contact",
    templateUrl: "js/templates/contact.html"
  }).state("vendors", {
    url: "/vendors",
    templateUrl: "js/templates/vendors.html"
  }).state("faq", {
    url: "/faq",
    templateUrl: "js/templates/faq.html"
  });
});

skysight.run(['$rootScope', function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);