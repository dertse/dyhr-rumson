// the controller for the modal itself
// (separate from underlying view/directive)
app.controller('myModalInstance', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {

  $scope.ok = function() {
    // user approves om seleted option
    // so send the selected option back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.close($scope.selectedOption);
  };

  $scope.cancel = function() {
    // user does not approve/ignored us
    // so send nothing back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.dismiss();
  };
}]);