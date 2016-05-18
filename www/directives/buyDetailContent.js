app.directive("buyDetailContent", [function() {
	
	return{

		templateUrl: "/directives/buyDetailContent.html",
		controller: ['$scope', '$routeParams', 'Property', function($scope, $routeParams, Property){


		var theID = $routeParams.id;
		Property.getById({id: theID}, function(info){


		  	$scope.property = info;

		  	/*console.log("ID:", theID,
		  				"\nAdress:", info.adress,
		  				"\nKvm:", info.size,
		  				"\nPris:", info.price,
		  				"\nTyp:", info.type,
		  				"\nBeskrivning:", info.description,
		  				"\nBild:", info.pic);*/
		  });
		

		
		}]
	}; 
}]);