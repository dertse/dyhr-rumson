app.directive('buyContent', [function() {
	
	return {
		templateUrl: '/directives/buyContent.html',
		controller: ['$scope','$location','$routeParams','Property', 'Apartment', function($scope,$location,$routeParams, Property, Apartment){


/*
////////// - Queries til mongoDB  
//--------------  Sortera efter pris : 100000

> db.getCollection('properties').find({price:{$gt: 10000000}})

// In angulaar
// Show everything less than 2 millions, sort from cheap to expensive
Property.get({price:{$lte:2000000,_sort:{price:1}})

>> RESULTAT:   - Bodilsgatan



//--------------- Sortera efter antal rum : 4

> db.getCollection('properties').find({room:4})

>> RESULTAT: - Dvärgvidegatan 1, Videdal

*/




	// Våra dummy Property
	/*			
			$scope.properties = Property.create([{

				adress: "Bodilsgatan 4A, Fridhem",
				room: 9,
				size: 325,
				price: 12875000,
				type: "Villa",
				description: "Villan som har en boyta på ca 325 kvm samt en boyta på ca 120 kvm, ligger på en mycket rogivande och insynsskyddad tomt. Flertalet uteplatser ligger i olika väderstreck så att man kan möta solens strålar under hela dagen. Villans materialval är av hög kvalité: genuin kalksten, gedigna trägolv av ek, marmor, fiskbensparkett, spegeldörrar, teak och utvändigt av tegel och koppar.",
				pic:"img/bild4.jpg"
			},
			{
				adress: "John Lundvallsgatan 13, Bunkeflostrand",
				room: 8,
				size: 245,
				price: 6500000,
				type: "Villa",
				description: "Gedigen kvalitetsvilla på Bunkeflostrands sjösida! Interiören mäter hela 211kvm på 1 plan med 6 rymliga sovrum, 3 badrum och fantastiska sällskapsytor med över 5 m i takhöjd. Som extra krydda finner ni även ett eget biorum på plan 2 på över 30 kvm. Låga driftskostnader.",
				pic:"img/bild2.jpg"

			},
			{
				adress: "Dvärgvidegatan 1, Videdal",
				room: 4,
				size: 138,
				price: 399500,
				type: "Villa",
				description: "Mycket fint och gediget stenhus som genomgått omfattande och påkostade renoveringar som dränering -11, byte av tak -13, fönsterbyte -11, el-11 och värmepump från -11, Inre hel renovering -11 med bland annat nya badrum, kök och maskiner, golv och ytskikt. Trivsamt vardagsrum i vinkel, 3 stora sovrum som kan bli 4. Inredd källare med bra takhöjd. Uterum och carport med förråd från -15. Välkommen på visning.",
				pic:"img/bild3.jpg"

			},
			{
				adress: "Spelmansgatan 64, Kastanjegården",
				room: 6,
				size: 134,
				price: 3595000,
				type: "Villa",
				description: "Trevlig 70-tals villa med inredd källare. Altan, balkong och öppen spis är bara några av fördelarna med detta boende.",
				pic:"img/bild1.jpg"

			}];
			*/







			// Våra dummy lägenheter
		/*	
			$scope.apartments = Apartment.create([{
				
				adress: "Major-Nilsgatan 16, Segevång",
				room: 3,
				size: 73,
				price: 1200000,
				type: "Lägenhet",
				description: "lägenheten som har en boyta på ca 73 kvm. Flertalet uteplatser ligger i olika väderstreck så att man kan möta solens strålar under hela dagen. lägenhetens materialval är av hög kvalité: genuin kalksten, gedigna trägolv av ek, marmor, fiskbensparkett, spegeldörrar, teak och utvändigt av tegel och koppar.",
				pic:"img/bild3.jpg"
			},
			{
				adress: "Dvärgvidegatan 1, Nydala",
				room: 2,
				size: 51,
				price: 650000,
				type: "Lägenhet",
				description: "Gedigen lägenhet på Nydala. Interiören mäter hela 51kvm på 1 plan med 2 rymliga rum, badrum och fantastiska sällskapsytor med över 3m i takhöjd. Låga driftskostnader.",
				pic:"img/bild2.jpg"

			},
			{
				adress: "John Lundvallsgatan 13, Västra Hamnen",
				room: 4,
				size: 138,
				price: 995000,
				type: "Lägenhet",
				description: "Mycket fint och gediget lägenhet som genomgått omfattande och påkostade renoveringar som stammbyte -11, byte av tak -13, vardagsrum i vinkel, 3 stora sovrum som kan bli 4. Inredd källare med bra takhöjd. Uterum och carport med förråd från -15. Välkommen på visning.",
				pic:"img/bild1.jpg"

			},
			{
				adress: "Spelmansgatan 64, Kastanjegården",
				room: 5,
				size: 134,
				price: 3000000,
				type: "Lägenhet",
				description: "Trevlig lägenhet med Altan, balkong är bara några av fördelarna med detta boende.",
				pic:"img/bild4.jpg"

			},
			{
				adress: "Dvärgvidegatan 64, Kastanjegården",
				room: 2,
				size: 47,
				price: 700000,
				type: "Lägenhet",
				description: "Gedigen lägenhet på Kastanjegården. Interiören mäter hela 47kvm på 1 plan med 2 rymliga rum, badrum och fantastiska sällskapsytor med över 3m i takhöjd",
				pic:"img/bild3.jpg"

			},
			{
				adress: "John Lundvallsgatan 13, Västra Hamnen",
				room: 3,
				size: 88,
				price: 1300000,
				type: "Lägenhet",
				description: "Trevlig lägenhet med Altan, balkong är bara några av fördelarna med detta boende.",
				pic:"img/bild1.jpg"

			},
			{
				adress: "Bankgatan 4, Videdal",
				room: 4,
				size: 96,
				price: 2200000,
				type: "Lägenhet",
				description: "Denna lägenhet har en boyta på ca 96 kvm. Flertalet uteplatser ligger i olika väderstreck så att man kan möta solens strålar under hela dagen.",
				pic:"img/bild2.jpg"

			}]);



*/


			// Denna lyssnar efter ändringar i detalj-sökrutan

			$('#mySearchControl').change(function() {
				var room = $('#valueRoom option:selected').text();
				var size = $('#valueSize option:selected').text();
				var price = $('#valuePrice option:selected').text();

				console.log("Nya värden\n\n" ,"Antal Rum : ", room ,"\n" ,"Storlek :" , size, "\n", "Pris : ", price, "\n");

				// håller i nya och gamla värden
				var searchRoom = room;
				var searchSize = size;
				var searchPrice = price;

				$('#searchRoom').html(searchRoom);
				$('#searchSize').html(searchSize);
				$('#searchPrice').html(searchPrice);

				if(searchPrice == " < 10,000,000 "){
					$('#extraInfo').append("Hoppas du kan redovisa dem pengarna :P");
				}
				else{
					$('#extraInfo').text("");
				}

			});

			/**/

			// Get all persons (including the new one)
    		$scope.allProperties = Property.get(function(){
    			console.log("allProperies:", $scope.allProperties);
    		});



			$scope.allApartments = Apartment.get(function(){
    			console.log("allApartments:", $scope.allApartments);

    			for(var i = 0; i < $scope.allApartments.length; i++){
    				console.log(i , "Adress", $scope.allApartments[i].street);
    			}
    		});
			

			/*{
				$and: [
					{room:8},
					{size: {$gte:200,$lte:300}},
					{price: {$lte:1000000,$gte:10000000}}
				]



			a = Property.get({
				$and: [
					{room:9},
					{size: {$gte:200,$lte:350}},
					{price: {$gte:1000000,$lte:13000000}}
				]
			});


			}*/
    		window.Apartment = Apartment;
    		window.Property = Property;



		}]
	};
}]);