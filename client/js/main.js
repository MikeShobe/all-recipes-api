(function() {
angular.module('main', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
    .state('documentation', {
      url: '/docs',
      templateUrl: 'partials/documentation.html'
    })
    .state('getting-started', {
      url: '/getting-started',
      templateUrl: 'partials/getting-started.html'
    });

    $urlRouterProvider.otherwise('/');
});
})();