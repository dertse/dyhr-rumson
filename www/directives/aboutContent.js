app.directive('aboutContent', [function() {

	return{
		templateUrl:'/directives/aboutContent.html',
		controller: ['$scope', function ($scope) {

			$(function() {
			  $( "#accordion" ).accordion({
			    collapsible: true
			  });
			});
			
		}]
	}
}]);