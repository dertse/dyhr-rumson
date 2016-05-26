app.directive('contacts', [function () {

	return {
		templateUrl: '/directives/contacts.html',
		controller: ['$scope', '$location', '$resource', '$routeParams', 'Contact', function ($scope, $location, $resource, $routeParams, Contact) {

			jQuery(document).ready(function($) {

			      $(".scroll").click(function(event){
			          event.preventDefault();
			          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
			      });
			 });

			// -- Contact Scope -- //
			$scope.submitCont = function () {
				//create new Contact when form is submitted
				Contact.create($scope.newCont);
				console.log($scope.newCont, "created")
				$scope.newCont = null;
			}

			// Regions			
			$scope.regions = [{

				name: "Region 1",
				location: "Stockholm",
				adress: "Exempelgatan 0, Exempel",
				description: "Som en av de ledande aktörerna bland mäklarföretagen i Stockholmsregionen kan vi attrahera de skickligaste mäklarna; de som har gediget affärsmannaskap, djup lokalkännedom och hög servicegrad. Vi har ett 80-tal medarbetare i Storstockholm. Via Örjan Stockholmskontor har du även tillgång till Örjan nationella kontorsnät. I alla affärer jobbar vi aktivt med vårt köparregister Boagenten där över 7000 köpklara spekulanter i Stockholmsregionen längtar efter rätt bostad.",
				pic: "img/region/stockholm.png"
			},
				{
					name: "Region 2",
					location: "Göteborg",
					adress: "Exempelgatan 0, Exempel",
					description: "Örjan är det största mäklarföretaget i Göteborgsregionen där vi framgångsrikt attraherat de skickligaste mäklarna. De ingår bland våra drygt 120 medarbetare, fördelade på tretton lokala kontor. Där arbetar vi efter Örjanmetoden, en välbeprövad sjustegsmetod som säkrar kvaliteten genom hela bostadsaffären.",
					pic: "img/region/goteborg.png"

				},
				{
					name: "Region 3",
					location: "Malmö",
					adress: "Exempelgatan 0, Exempel",
					description: "Örjan är det ledande mäklarföretaget i Malmöregionen. Vår lokalkännedom och erfarenhet gör att vi hittar rätt köpare för din bostad. Vi arbetar efter Örjanmetoden, en välbeprövad sjustegsmetod som säkrar kvaliteten genom hela din bostadsaffär.",
					pic: "img/region/malmo.png"

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
				description: "Lorem ipsum",
				pic: "img/kontor/kontor1.jpg"
			},
				{
					name: "Göteborg",
					location: "Göteborg",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					room: 8,
					size: 245,
					description: "Lorem ipsum",
					pic: "img/kontor/kontor2.jpg"

				},
				{
					name: "Malmö",
					location: "Malmö",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					room: 4,
					size: 138,
					description: "Lorem ipsum",
					pic: "img/kontor/kontor3.jpg"
				}];

			// Employees
			$scope.employees = [{

				name: "Aleks",
				location: "Stockholm",
				adress: "Exempelgatan 0, Exempel",
				email: "blabla@blabla.bla",
				phone: "0000-00 00 00",
				price: 500,
				description: "Awesome",
				pic: "img/faces/Aleks.jpg"
			},
				{
					name: "Derek",
					location: "Stockholm",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					price: 500,
					description: "Awesome",
					pic: "img/faces/Derek.jpg"
				},
				{
					name: "Mobark",
					location: "Göteborg",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					price: 500,
					description: "Awesome",
					pic: "img/faces/Marcus.jpg"
				},
				{
					name: "Hamzeh",
					location: "Göteborg",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					price: 500,
					description: "Awesome",
					pic: "img/faces/Hamzeh.jpg"
				},
				{
					name: "Sara",
					location: "Malmö",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					price: 500,
					description: "Awesome",
					pic: "img/faces/Sara.jpg"
				},
				{
					name: "Mona",
					location: "Malmö",
					adress: "Exempelgatan 0, Exempel",
					email: "blabla@blabla.bla",
					phone: "0000-00 00 00",
					price: 500,
					description: "Awesome",
					pic: "img/faces/Mona.jpg"
				}];

		}]
	};
}]);
