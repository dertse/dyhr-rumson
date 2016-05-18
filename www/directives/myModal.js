// allows us to open a ui bootstrap modal
// using the $uibModal service from ui bootstrap
app.directive('myModal', [function() {

  return {
    templateUrl: '/directives/myModal.html',
    controller: ['$scope', '$uibModal', function($scope, $uibModal) {

      // opens our modal on ng-click!
      $scope.openModal = function() {

        // create a new modal with the following settings
        var modalInstance = $uibModal.open({
          animation: true, // animate show/hide
          // use this template
          templateUrl: '/modals/myModalInstance.html',
          // use this controller (src: /modals/myModalInstance.js)
          controller: 'myModalInstance',
          // prevent dismissing by clicking on backdrop
          backdrop: 'static',
          // make our modal large
          size: 'lg'
        });

        modalInstance.result.then(
          // "done" (user said OK)
          function (selectedOption) {
            // selected option is sent to us from the modal controller
            // ($uibModalInstance.close($scope.selectedOption))
            console.log('Modal closed at: ' + new Date() + ', User selected ' + selectedOption);
          }, function () {
            // "fail" (user said cancel)
            // the modal controller did not send us anything
            // ($uibModalInstance.dismiss())
            console.log('Modal dismissed at: ' + new Date());
          }
        );
      };
    }]
  };
}]);