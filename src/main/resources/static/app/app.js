(function(angular) {
  angular.module("myApp.controllers", []);
  angular.module("myApp.services", []);
  var app = angular.module("myApp", ["ngResource", "ngRoute","ngAnimate","ui.bootstrap","ngTouch", "myApp.controllers", "myApp.services"]);
  app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: "../pages/list.html",
          controller:'BookController',
        })
        .when('/books/:id', {
          templateUrl: "../pages/details.html",
          controller: 'BookDetailsController',
        })
        .otherwise({
            redirectTo:'/'
        });
  });
}(angular));