// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider){

	$routeProvider
	.when("/", {
		templateUrl: "/template/home.html"
	})
	.when("/buy", {
		templateUrl: "/template/buy.html"
	})
	.when("/sell", {
		templateUrl: "/template/sell.html"
	})
	.when("/contact", {
		templateUrl: "/template/contact.html"
	})
	.when("/about", {
		templateUrl: "/template/about.html"
	})
	.otherwise({
		templateUrl: "/template/404.html"
	})

	$locationProvider.html5Mode(true);
}]);