angular.module('myVODApp').config(function($routeProvider) {
    $routeProvider
    .when("/history", {
        templateUrl : "historyView.html",
        controller: "routeCtrl"
    })
    .when("/videoHistory", {
        templateUrl : "historyView.html",
        controller: "routeCtrl"
    });

});
