app.directive('buyContent', [function() {
	
	return {
		templateUrl: '/directives/buyContent.html',
		controller: ['$scope','$location','$routeParams','$uibModal','Property', function($scope,$location,$routeParams,$uibModal, Property){



		// Hämtar alla Properties från DB 
		$scope.properties = Property.get(function(info) 
		{
			$scope.properties = info;
			/*console.log(info);*/
 
			var antalObjekt = 0;
			var antalVillor = 0;
			var antalLägenheter = 0;
			

			for(var i = 0; i < $scope.properties.length; i++)
			{
				
				//console.log("st av typen", $scope.properties[i].type);
				if ($scope.properties[i].type == "Villa") 
				{
					antalVillor++;
				}
				else if ($scope.properties[i].type == "Lägenhet") 
				{
					antalLägenheter++;
				}
			}
			// uppdaterar antalet objekt i view på knapparna
			antalObjekt = antalVillor + antalLägenheter; 
			$('#antalVillor').html(antalVillor);
			$('#antalLägenheter').html(antalLägenheter);
			$('#antalObjekt').html(antalObjekt);
		
		});


		// hämtar alla objekt
		$scope.getAll = function(){
			$scope.properties = Property.get({},function(data){
				console.log("Alla Objekt:" , data.length, data);
				$('#antalObjekt').html(data.length);
				$('#typTitel').html("Alla Bostäder");
			});
		};

		// hämtar Villor/Hus
		$scope.getProperties = function(){
			$scope.properties = Property.get({type:"Villa"}, function(data){
				console.log("Villor: ",data.length, data);
				$('#typTitel').html("Alla Hus & Villor");
			});
		};

		// hämtar lägenheter
		$scope.getApartments = function(){
			$scope.properties = Property.get({type:"Lägenhet"},function(data){
				console.log("Lägenheter:" , data.length, data);
				$('#typTitel').html("Alla Lägenheter");
			});
		};



		// sök mot databas
		$scope.searchForProperties = function(){

			var roomResult = 0;
			var antalObjekt = 0;

			var valueRoom = $('#valueRoom').val();
			var valueSize = $('#valueSize').val();
			var valuePrice = $('#valuePrice').val();


			////////////////
			// getRooms
			///////////////
			$scope.searchResult = Property.get({$and: [
				{room:{$gte: valueRoom}},
				{size:{$gte: valueSize}}
			]},function(result){
				
				antalObjekt = result.length; 

				for(var i = 0; i < result.length; i++)
				{	
					roomResult++;
					console.log(result[i].adress, "uppfyller krav");
				}
				
				$scope.properties = result;
				$('#theRoomResult').html(roomResult);
				$('#antalObjekt').html(antalObjekt);
				$('#typTitel').html(roomResult + " objekt hittades");

				
			});
			console.log("------------");

		}// END getTheData funktionen



		// utför en queryReqest
		// vid varje ändring i min div #mySearchControl
		$('#mySearchControl').change(function(){

			var roomResult = 0;
			var antalObjekt = 0;

			var valueRoom = $('#valueRoom').val();
			var valueSize = $('#valueSize').val();
			var valuePrice = $('#valuePrice').val();


			////////////////
			// sök efter resultat
			///////////////
			$scope.searchResult = Property.get({$and: [
				{room:{$gte: valueRoom}},
				{size:{$gte: valueSize}}
			]},function(result){
				
				antalObjekt = result.length;

				for(var i = 0; i < result.length; i++)
				{
					roomResult++;
					console.log(result[i].adress, "uppfyller krav");
				}
				
				$scope.properties = result;
				
				$('#theRoomResult').html(roomResult);
				$('#antalObjekt').html(antalObjekt);
				$('#typTitel').html(roomResult + " objekt hittades");

				
			});
				
			console.log("------------");

		});



		// så ska jag filtrera mina sökningar mot mongoDB i routen
		/*

		{
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


		}

		window.Apartment = Apartment;
		window.Property = Property;
		*/


/*carousel test*/

$scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      $scope.addSlide = function() {
        var newWidth = 1200 + slides.length + 1;
        slides.push({
        	image: '/img/l/bild' + 1 + '.jpg',
         /* image: 'http://lorempixel.com/' + newWidth + '/300',*/
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
          id: currIndex++
        });
      };

      for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }

/*modal test*/

   // opens our modal on ng-click!
      $scope.openModal = function() {

        // create a new modal with the following settings
        var modalInstance = $uibModal.open({
          animation: true, // animate show/hide
          // use this template
          templateUrl: '/modals/myModalInstance.html',
          // use this controller (src: /modals/myModalInstance.js)
          controller: 'myModalInstance',
          // prevent dismissing by clicking on backdrop
          backdrop: 'static',
          // make our modal large
          size: 'lg'
        });

        modalInstance.result.then(
          // "done" (user said OK)
          function (selectedOption) {
            // selected option is sent to us from the modal controller
            // ($uibModalInstance.close($scope.selectedOption))
            console.log('Modal closed at: ' + new Date() + ', User selected ' + selectedOption);
          }, function () {
            // "fail" (user said cancel)
            // the modal controller did not send us anything
            // ($uibModalInstance.dismiss())
            console.log('Modal dismissed at: ' + new Date());
          }
        );
      };



		}]
	};
}]);