app.directive('contacts', [function() {
	
	return {
		templateUrl: '/directives/contacts.html',
		controller: ['$scope','$location','$resource','$routeParams', function($scope,$location,$resource,$routeParams){
				
			// Regions			
			$scope.regions = [{

				name: "Region 1",
				location: "Stockholm",
				adress: "Exempelgatan 0, Exempel",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/region/stockholm.png"
			},
			{
				name: "Region 2",
				location: "Göteborg",
				adress: "Exempelgatan 0, Exempel",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/region/goteborg.png"

			},
			{
				name: "Region 3",
				location: "Malmö",
				adress: "Exempelgatan 0, Exempel",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/region/malmo.png"

			}];
			
			// Offices
			$scope.offices = [{

				name: "Stockholm",
				location: "Stockholm",
				adress: "Exempelgatan 0, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				room: 9,
				size: 325,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/kontor/kontor1.jpg"
			},
			{
				name: "Göteborg",
				location: "Göteborg",
				adress: "Exempelgatan 0, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				room: 8,
				size: 245,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/kontor/kontor2.jpg"

			},
			{
				name: "Malmö",
				location: "Malmö",
				adress: "Exempelgatan 0, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				room: 4,
				size: 138,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/kontor/kontor3.jpg"
			}];
			
			// Employees
			$scope.employees = [{

				name: "okraM",
				location: "Stockholm",
				adress: "Bodilsgatan 4A, Fridhem",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 500,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild4.jpg"
			},
			{
				name: "sucraM",
				location: "Göteborg",
				adress: "Bodilsgatan 4A, Fridhem",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 500,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild4.jpg"
			},
			{
				name: "skelA",
				location: "Malmö",
				adress: "Bodilsgatan 4A, Fridhem",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 500,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild4.jpg"
			}];
			
		}]
	};
}]);
