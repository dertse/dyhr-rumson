app.directive('mainContent', [function(){

  return {
    templateUrl: '/directives/mainContent.html',
    controller: ['$scope', function($scope) {
      $scope.wells = [
        {
          title: 'Well 1',
          content: 'Aliquam finibus purus vitae ipsum aliquam, vitae blandit lectus aliquet. Phasellus dignissim porta placerat. Nulla facilisi.'
        },
        {
          title: 'Well 2',
          content: 'Morbi nibh dui, porttitor vel sagittis vel, porttitor nec dolor. Duis cursus porttitor neque, sagittis scelerisque est commodo quis.'
        },
        {
          title: 'Well 3',
          content: 'Pellentesque a bibendum nisi. In dignissim est tortor, vitae iaculis nunc gravida et. Mauris venenatis libero eget risus sollicitudin euismod ut sed mi.'
        }
      ];

      // make all wells fit on a single row
      $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);









