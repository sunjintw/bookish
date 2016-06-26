(function(angular) {
  var BookFactory = function($resource) {
    return $resource('/books/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      },
      get: {
        method: "GET"
      }
    });
  };

  BookFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("BookService", BookFactory);
}(angular));