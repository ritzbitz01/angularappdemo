var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', function ($scope, $http) {

    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.artistOrder='name';
    });

});

artistControllers.controller('DetailsController', function ($scope, $http, $routeParams) {

    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
        $scope.whichItem=$routeParams.itemId;

        if($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.artists.length-1;
        }

        if($routeParams.itemId < $scope.artists.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }
    });

});