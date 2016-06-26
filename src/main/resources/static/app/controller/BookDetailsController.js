(function(angular) {
    var BookDetailsController = function($scope, $routeParams, BookService) {
        BookService.get($routeParams,function(response) {
            $scope.book = response;
        });
    };

    BookDetailsController.$inject = ['$scope', '$routeParams', 'BookService'];

    angular.module("myApp.controllers").controller("BookDetailsController", BookDetailsController);
}(angular));