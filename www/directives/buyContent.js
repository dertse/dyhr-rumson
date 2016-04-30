app.directive('buyContent', [function() {
	
	return {
		templateUrl: '/directives/buyContent.html',
		controller: ['$scope','$location','$resource','$routeParams', function($scope,$location,$resource,$routeParams){


			/* Våra dummy lägenheter */
			$scope.apartments = [{
				
				
				adress: "Lingonvägen 38",
				room: 3,
				size: 88,
				price: 850000,
				type: "Lägenhet",
				description: "3a med Söderläge",
				pic:"img/bild1.jpg"
			},
			{
				adress: "Storgatan 5",
				room: 4,
				size: 91,
				price: 1200000,
				type: "Lägenhet",
				description: "Stor 2a i Holma",
				pic:"img/bild2.jpg"

			},
			{
				adress: "Amiralsgatan 2",
				room: 1,
				size: 36,
				price: 900000,
				type: "Lägenhet",
				description: "Renoverad 1a vid Konserthuset",
				pic:"img/bild3.jpg"

			},
			{
				adress: "Nilsväg 16",
				room: 2,
				size: 48,
				price: 780000,
				type: "Lägenhet",
				description: "2 med balkong & söderläge",
				pic:"img/bild4.jpg"

			}];






			/* Våra dummy hus */
			$scope.houses =
			[{

				city: "Malmö",
				street: "storgatan5"

			}];

		}]

	};
}]);