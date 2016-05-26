 app.directive('buyContent', [function() {
	
	return {
		templateUrl: '/directives/buyContent.html',
		link: function(scope, elem, attrs) {
			scope.toggleDetailSearch = function() {
				elem.find('.searchDetailsParent').slideToggle(500);
			};
		},
		controller: ['$scope','$location','$routeParams','$uibModal','Property', function($scope,$location,$routeParams,$uibModal, Property){

		var once;
		function propInfo() {
			// onyl do this once,
			// since we want info for ALL properties
			// not filtered!
			if (once) { return; }
			once = true;

			var antalObjekt = 0;
			var antalVillor = 0;
			var antalLagenheter = 0;
			

			for(var i = 0; i < $scope.properties.length; i++)
			{
				
				//console.log("st av typen", $scope.properties[i].type);
				if ($scope.properties[i].type == "Villa") 
				{
					antalVillor++;
				}
				else if ($scope.properties[i].type == "Lägenhet") 
				{
					antalLagenheter++;
				}
			}
			// uppdaterar antalet objekt i view på knapparna
			antalObjekt = antalVillor + antalLagenheter; 
			$scope.antalVillor = antalVillor;
			$scope.antalLagenheter = antalLagenheter;
			$scope.antalObjekt = antalObjekt;
		}



		// hämtar alla objekt
		$scope.getAll = function(){
			$scope.typeSel = '';
		};

		// hämtar Villor/Hus
		$scope.getProperties = function(){
			$scope.typeSel = 'Villa';
		};

		// hämtar lägenheter
		$scope.getApartments = function(){
			$scope.typeSel = 'Lägenhet';
		};


		// thomas sök kod
		// src: http://lernia.nodebite.se/sokfiltrera-bygg-mongo-queries-fran-select-input/

		var options = {

			roomSel: {
				modelProperty: "room",
				type: Number,
				operator: "$gte"
			},
			typeSel: {
				modelProperty: "type",
				type: String,
				operator: "$eq"
			},
			maxPriceSel: {
				modelProperty: "price",
				type: Number,
				operator: "$lte"
			},
			minAreaSel: {
				modelProperty: "size",
				type: Number,
				operator: "$gte"
			}
		};

		// The $scope variables to watch as an array
		var toWatch = [];
		for(var i in options){ toWatch.push(i); }

		console.log("$watchGroup watching scope props", toWatch);

		// Basics of using JavaScript array sort
		/*
		var arr = [{firstName:"Daniel"},{firstName: "Alex"}];
		arr.sort(function(item1,item2){
			// We want to sort the array so that name are ascending (Alex first)
			return item1.firstName > item2.firstName ? 1 : -1;
		});
		console.log(arr);
		*/

		function sort(){
			if(!$scope.properties){return;}
			var split = $scope.roomSort.split(",");
			var sortParam = split[0];
			var sortOrder = split[1];
			console.log("sortParam",sortParam,"sortOrder",sortOrder);
			$scope.properties.sort(function(propA,propB){
				return propA[sortParam] < propB[sortParam] ? (sortOrder == "asc" ? -1 : 1) : (sortOrder == "asc" ? 1 : -1);
			});
		}
		// when the user chooses a new sortOrder - re-sort
		$scope.roomSort = "price,asc";
		$scope.$watch("roomSort",sort);
		

		// sök mot databas
		$scope.searchForProperties = function(){

		  var query = {$and:[]}, partQuery, val, ops;
		  // Build a mongo $and query by looping through the options
		  for(var i in options){
		    ops = options[i];
		    // Get the value from $scope, convert numbers to numbers
		    val = ops.type === Number ? $scope[i] / 1 : $scope[i];
		    // Ignore empty and faulty values
		    if(!val){ continue; }
		    if(ops.type === Number && isNaN(val)){ continue; }
		    // Build this part of the query
		    partQuery = {};
		    partQuery[ops.modelProperty] = {};
		    partQuery[ops.modelProperty][ops.operator] = val;
		    // Add it to the main query
		    query.$and.push(partQuery);
		  }
		  // $and must never be an empty array
		  if(query.$and.length === 0){ delete query.$and; }
		  // Debug, check how the query looks
		  console.log("QUERY", JSON.stringify(query,'','  '));
		  // Query the database through a ngResource object
		  $scope.properties = Property.get(query, function(){
		  	// when we recieve new data from mongo
		  	// sort it by chosen roomtSort value
		  	// and update propInfo
		  	sort();
		  	propInfo();
		  });

		}// END getTheData funktionen

		// Watch the variables for changes
		$scope.$watchGroup(toWatch, function(){
		  $scope.searchForProperties();
		});




/*carousel test*/

/*$scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      $scope.addSlide = function() {
        var newWidth = 1200 + slides.length + 1;
        slides.push({
         image: 'http://lorempixel.com/' + newWidth + '/300',
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
          id: currIndex++
        });
      };

      for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }
*/


/*modal test*/

/*
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

*/




		}]
	};
}]);