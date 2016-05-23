app.directive('sellForm', [function() {

	return {
		templateUrl: '/directives/sellForm.html',
		controller: ['$scope', 'Property', function ($scope, Property) {

			$scope.submitForm = function (){
				//create new Property when form is submitted
				Property.create($scope.newProp);
				console.log($scope.newProp, "created")
				$scope.newProp = null;
			}
		}]
	}
}]);