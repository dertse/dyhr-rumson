app.directive('sellForm', [function() {

	return {
		templateUrl: '/directives/sellForm.html',
		controller: ['$scope', 'Property', function ($scope, Property) {

			$scope.rooms = [1,2,3,4,5,6]

			// fill dropdownmenu with img
			$scope.imgUrls = [];
			var apartments = [], houses = [];

			(function (){
				for (var i = 0; i < 8; i++){
					apartments.push("/img/l/bild" + (i+1) + ".jpg");
					houses.push("/img/v/bild" + (i+1) + ".jpg");
				}
			})();

			$scope.update = function (){
				if ($scope.newProp.type === "Lägenhet") {
					$scope.imgUrls = apartments;
				}
				else if ($scope.newProp.type === "Villa") {
					$scope.imgUrls = houses;
				}
				console.log($scope.imgUrls)
			}


			//create new Property when form is submitted
			$scope.submitForm = function (){
				Property.create($scope.newProp);
				console.log($scope.newProp, "created")
				$scope.newProp = null;
			}

		}]
	}
}]);