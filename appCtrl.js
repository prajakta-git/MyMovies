var app = angular.module('myVODApp', ['ui.bootstrap','ngRoute']);

app.controller('myVODCtrl', function($uibModal,$scope, $http) {
//var ctrl = this;
$scope.history = [];

  $http({
    method : "GET",
    url : "https://demo2697834.mockable.io/movies"
  }).then(function mySuccess(response) {
      $scope.movieList = response.data.entries;

    }, function myError(response) {
      $scope.movieList = response.statusText;
  });

  $scope.open = function(movie){
    $scope.hasDupes(movie.id , movie);
    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      resolve: {
          movie: function () {
            return movie;
          }
        }
      });
    };

    var arr = [];
     $scope.hasDupes = function(name, value){
         if(!~arr.indexOf(name)) {
              arr.push(name);
             $scope.history.push(value);
             console.log(arr);
         }
     };
});
