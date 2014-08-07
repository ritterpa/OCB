/**
 * Created by Paul on 8/2/2014.
 */

var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'restangular', 'ngGrid']);


//TODO: Find out what the API URL is and change it here!
app.constant('apiUrl', 'https://ocb2.azurewebsites.net/api');

app.config(function ($stateProvider, $urlRouterProvider, apiUrl, RestangularProvider) {

    RestangularProvider.setRestangularFields({
        id: 'Id'
    });

    RestangularProvider.setBaseUrl(apiUrl);
    //
    // For any unmatched url, redirect to /state1
    //
    $urlRouterProvider.otherwise("/tournaments");
    //
    // Now set up the states
    $stateProvider

//        ********** Tournaments  **********

        .state('tournaments', {
            url: '/tournaments',
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('tournaments.list', {
            url: '',
            templateUrl: 'app/tournaments/list/list.html',
            controller: 'TournamentsListCtrl',
            resolve: {
                Tournaments: function (Restangular) {
                    return Restangular.all('tournaments').getList().then(function (tournaments) {
                        return tournaments;
                    });
                }
            }
        })

});