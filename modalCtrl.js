angular.module('myVODApp').controller('ModalInstanceCtrl', ['$scope','$uibModalInstance', 'movie', function ($scope, $uibModalInstance, movie) {
  //var ctrl = this;
  //ctrl.movie = movie;
  $scope.videoUrl = movie.contents[0].url;
//console.log("link to video: "+$scope.videoUrl);
  $scope.cancel = function () {
    $uibModalInstance.dismiss('close');
  };
}]);
