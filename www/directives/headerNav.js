app.directive('headerNav', [function(){

  return {
    templateUrl: '/directives/headerNav.html',
    controller: ['$scope', '$interval', '$location', function($scope, $interval, $location) {

      $scope.links = [
        {
          title: "HEM",
          url: "/"
        },
        {
          title: "KÖPA",
          url: "/buy"
        },
        {
          title: "SÄLJA",
          url: "/sell"
        },
        {
          title: "OM",
          url: "/about"
        },
        {
          title: "KONTAKT",
          url: "/contact"
        },
      ];

      $scope.currentUrl = function() {
        return $location.url();
      }
      
      function currentTime() {
        $scope.currentTime = new Date();
      }
      currentTime();
      // update currentTime every 1 second
      // if we don't use angulars $interval
      // $scope wont realize that there is an updated value!
      $interval(currentTime, 1000);
    }]
  };
}]);