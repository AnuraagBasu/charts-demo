/**
 * Created by anuraagbasu on 19/04/16.
 */

angular.module("countriesApp", [
    "ui.router",
    "ng-fusioncharts"
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');
        eve.on('raphael.new', function () {
            this.raphael._url = this.raphael._g.win.location.href.replace(/#.*?$/, '');
        });

        $locationProvider.html5Mode(true);
    });