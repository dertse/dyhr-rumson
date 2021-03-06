// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);
//Dependency injection
app.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider,$modal){

	$routeProvider
	.when("/", {
		templateUrl: "/templates/home.html"
	})
	.when("/buy", {
		templateUrl: "/templates/buy.html"
	})
	.when("/buy/:id", {
		templateUrl: "/templates/buyDetailView.html"
	})
	.when("/sell", {
		templateUrl: "/templates/sell.html"
	})
	.when("/contact", {
		templateUrl: "/templates/contact.html"
	})
	.when("/about", {
		templateUrl: "/templates/about.html"
	})
	.otherwise({
		templateUrl: "/templates/404.html"
	});

	$locationProvider.html5Mode(true);
}]);