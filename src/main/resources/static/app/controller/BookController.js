(function(angular) {
    var BookController = function($scope, BookService) {
        $scope.currentPage = 1;
        $scope.maxSize = 5;

        BookService.get({page: 0, size:8},function(response) {
            $scope.books = response.content;
            $scope.totalItems = response.totalElements;
        });

        $scope.pageChanged = function() {
            BookService.get({page: $scope.currentPage - 1, size:8},function(response) {
                $scope.books = response.content;
                $scope.totalItems = response.totalElements;
            });
        };

        $scope.addBook = function(title) {
            new BookService({
                title: title,
                checked: false
            }).$save(function(book) {
                $scope.books.push(book);
            });
            $scope.newBook = "";
        };

        $scope.updateBook = function(book) {
            book.$update();
        };

        $scope.deleteBook = function(book) {
            book.$remove(function() {
                $scope.books.splice($scope.books.indexOf(book), 1);
            });
        };
    };

    BookController.$inject = ['$scope', 'BookService'];

    angular.module("myApp.controllers").controller("BookController", BookController);
}(angular));