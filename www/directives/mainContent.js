app.directive('mainContent', [function(){

  return {
    templateUrl: '/directives/mainContent.html',
    controller: ['$scope', 'Property', function ($scope, Property) {



      var temp = [], unique = [], adress = "", district = "", adressString = "";
      $scope.latestProps = [];

      // get all properties
      temp = Property.get(function(){
        // console.log(temp);

        // get 3 random not unique properties
        for (var i = 0; i < 3; i++){
          // check if property have already been picked
          var newProp;
          while (!newProp || unique.indexOf(newProp) >= 0) {
            newProp = temp[Math.floor(Math.random()*temp.length)];
          }
          unique.push(newProp);
          $scope.latestProps.push(newProp);
          console.log(unique, $scope.latestProps)
        
          
          // Since our adress property consists of both  adress and district
          // I want to split it up for display purposes
          adressString = $scope.latestProps[i]["adress"].split(',');

          $scope.latestProps[i]["adress"] = adressString[0];

          // Check if district is empty or not
          if (typeof adressString[1] === 'undefined' || adressString[1] === "") {

            $scope.latestProps[i]["district"] = "Malmö";
          }
          else {
            $scope.latestProps[i]["district"] = adressString[1] + ", Malmö";

          }

          console.log(adress)
          console.log($scope.latestProp)
          console.log(temp[Math.floor(Math.random()*temp.length)])
        }
      });



      $scope.wells = $scope.myInterval = 5000;

      $scope.colSize = Math.floor(24/$scope.wells.length);
    }]
  };
}]);



 