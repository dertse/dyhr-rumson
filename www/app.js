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
	.otherwise({
		templateUrl: "/template/404.html"
	})
}]);