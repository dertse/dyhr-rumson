app.directive('buyDetailContent', [function() {
	
	return {
		templateUrl: '/directives/buyDetailContent.html',
		controller: ['$scope','$location', function($scope,$location){

			/* Våra dummy hus */
			$scope.houses =
			[{

				city: "Malmö",
				street: "storgatan5"

			}];

		}]

	};
}]);