var phonecatApp = angular.module('phonecatApp', [
    'ngRoute', 
    'phonecatControllers',
    'phonecatFilters'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider){
      $routeProvider.
          when('/', {
              templateUrl: 'static/partials/phone-list.html',
              controller: 'PhoneListCtrl'
          }).
          when('/phones/:phoneId', {
              templateUrl: 'static/partials/phone-detail.html',
              controller: 'PhoneDetailCtrl'
          }).
          otherwise({
              redirectTo: '/'
          });
  }]);
