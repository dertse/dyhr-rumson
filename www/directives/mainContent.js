app.directive('mainContent', [function(){

  return {
    templateUrl: '/directives/mainContent.html',
    controller: ['$scope', 'Property', function ($scope, Property) {

// work in progress
/*      var temp = [], latestProp = [];

      // get all properties
      temp = Property.get();
      console.log(Property.get())*/


      $scope.wells = $scope.myInterval = 5000;

      $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);



 