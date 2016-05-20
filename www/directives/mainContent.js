app.directive('mainContent', [function(){

  return {
    templateUrl: '/directives/mainContent.html',
    controller: ['$scope', function($scope) {

      $scope.wells = $scope.myInterval = 5000;

      $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);



 