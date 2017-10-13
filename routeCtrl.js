angular.module('myVODApp').controller('routeCtrl', function ($scope) {
  //var ctrl = this;
  //ctrl.movie = movie;
  $scope.movieHist = $scope.history;
 console.log("link to video: "+$scope.movieList.length);

});
