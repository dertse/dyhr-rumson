// directive that loads ui bootstraps carousel
app.directive('myCarousel', [function () {

  return {
    templateUrl: '/directives/myCarousel.html',
    // template: '<div>Hej!</div>',
    controller: ['$scope', function($scope) {
      $scope.myInterval = 3000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var currIndex = 0;
      $scope.addSlide = function() {
        
        slides.push({ 
          imageStyle: {
            'background-image': 'url(/img/vila%20' + (currIndex+1) + '/bild' + (currIndex+1) + '-1.jpg)'
          },
          text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
          id: currIndex
        });
        currIndex++;
      };

      for (var i = 0; i < 7; i++) {
        $scope.addSlide();
      }

      console.log("slides", slides)
    }]
  };
}]);