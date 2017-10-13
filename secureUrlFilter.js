angular.module('myVODApp')
  .filter('secureUrl', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
