'use strict';

angular.module('client',
  ['ngAnimate', 'ngCookies', 'ngTouch',
   'ngSanitize', 'ngResource', 'ui.router',
   'ui.bootstrap', 'ads.navbar', 'ads.main', 'ads.events', 'ads.searchfield', 'ads.chartControllers']
)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'AdverseEventsCtrl',
        controllerAs: 'eventsCtrl'
      })
      .state('eventsChart', {
        url: '/eventsChart',
        templateUrl: 'app/components/barchart/bar-chart.html',
        controller: 'BarChartCtrl',
        controllerAs: 'barChartCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('apiKey', 'PMu2VWNEL2toIOjWKmlJ40RGeClZsO3Ey7IacRLo')
  .constant('fdaApiUrl', 'https://api.fda.gov')
;
