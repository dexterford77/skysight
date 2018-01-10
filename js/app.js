var skysight = angular.module("skysight", ['ui.router', 'ui.bootstrap']);

skysight.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "js/templates/home.html"
  }).state("products", {
    url: "/products",
    abstract: true,
    template: "<div ui-view></div>"
  }).state('products.index', {
    url: "",
    templateUrl: "js/templates/products/index.html",
    controller: "ProductsIndexCtrl"
  }).state('products.show', {
    url: "/:id",
    templateUrl: "js/templates/products/show.html",
    controller: "ProductsShowCtrl"
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