app.directive('mainContent', [function(){

  return {
    templateUrl: '/directives/mainContent.html',
    controller: ['$scope', function($scope) {

      $scope.wells = $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;

      $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          //image: 'http://lorempixel.com/' + newWidth + '/300',
          imageStyle: {
            'background-image': 'url(http://lorempixel.com/' + newWidth + '/300)'
          },
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
          id: currIndex++
        });
      };
    
      for (var i = 0; i < 4; i++) {
        $scope.addSlide();
      }


      $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);



 