app.directive('contacts', [function() {
	
	return {
		templateUrl: '/directives/contacts.html',
		controller: ['$scope','$location','$resource','$routeParams', function($scope,$location,$resource,$routeParams){
			
			// Regions			
			$scope.regions = [{

				name: "Region 1",
				location: "Stockholm",
				adress: "Bodilsgatan 4A, Fridhem",
				room: 9,
				size: 325,
				price: 12875000,
				type: "Villa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild4.jpg"
			},
			{
				name: "Region 2",
				location: "Göteborg",
				adress: "John Lundvallsgatan 13, Bunkeflostrand",
				room: 8,
				size: 245,
				price: 6500000,
				type: "Villa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild2.jpg"

			},
			{
				name: "Region 3",
				location: "Malmö",
				adress: "Dvärgvidegatan 1, Videdal",
				room: 4,
				size: 138,
				price: 399500,
				type: "Villa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild3.jpg"

			}];
			
			// Offices
			$scope.offices = [{

				name: "Kontor 1",
				location: "Stockholm",
				adress: "Exempelgatan 0A, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				room: 9,
				size: 325,
				price: 12875000,
				type: "Villa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild4.jpg"
			},
			{
				name: "Kontor 2",
				location: "Göteborg",
				adress: "Exempelgatan 0, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				room: 8,
				size: 245,
				price: 6500000,
				type: "Villa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild2.jpg"

			},
			{
				name: "Kontor 3",
				location: "Malmö",
				adress: "Exempelgatan 0, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				room: 4,
				size: 138,
				price: 399500,
				type: "Villa",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id gravida ligula. Nulla vel vestibulum nulla. Maecenas aliquam eros ac felis iaculis, ac blandit risus hendrerit. Mauris sed scelerisque mi. Ut magna mi, cursus ut porttitor a, condimentum blandit ipsum. Nulla aliquet iaculis nunc non vehicula. Sed id molestie sem, a tempor ipsum. Sed feugiat turpis in elit hendrerit gravida.",
				pic:"img/bild3.jpg"
			}];
			
			// Employees
			$scope.employees = [{

				name: "Dude 1",
				location: "Stockholm",
				adress: "Bodilsgatan 4A, Fridhem",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 12875000,
				type: "Villa",
				description: "Villan som har en boyta på ca 325 kvm samt en boyta på ca 120 kvm, ligger på en mycket rogivande och insynsskyddad tomt. Flertalet uteplatser ligger i olika väderstreck så att man kan möta solens strålar under hela dagen. Villans materialval är av hög kvalité: genuin kalksten, gedigna trägolv av ek, marmor, fiskbensparkett, spegeldörrar, teak och utvändigt av tegel och koppar.",
				pic:"img/bild4.jpg"
			},
			{
				name: "Dude 2",
				location: "Göteborg",
				adress: "Bodilsgatan 4A, Fridhem",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 12875000,
				type: "Villa",
				description: "Villan som har en boyta på ca 325 kvm samt en boyta på ca 120 kvm, ligger på en mycket rogivande och insynsskyddad tomt. Flertalet uteplatser ligger i olika väderstreck så att man kan möta solens strålar under hela dagen. Villans materialval är av hög kvalité: genuin kalksten, gedigna trägolv av ek, marmor, fiskbensparkett, spegeldörrar, teak och utvändigt av tegel och koppar.",
				pic:"img/bild4.jpg"
			},
			{
				name: "Dude 3",
				location: "Malmö",
				adress: "Bodilsgatan 4A, Fridhem",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 12875000,
				type: "Villa",
				description: "Villan som har en boyta på ca 325 kvm samt en boyta på ca 120 kvm, ligger på en mycket rogivande och insynsskyddad tomt. Flertalet uteplatser ligger i olika väderstreck så att man kan möta solens strålar under hela dagen. Villans materialval är av hög kvalité: genuin kalksten, gedigna trägolv av ek, marmor, fiskbensparkett, spegeldörrar, teak och utvändigt av tegel och koppar.",
				pic:"img/bild4.jpg"
			}];
			
		}]
	};