/**
 * Created by anuraagbasu on 19/04/16.
 */

angular.module("countriesApp")
    .config(function ($stateProvider) {
        $stateProvider
            .state("pieChart", {
                template: '<div ui-view></div>',
                abstract: true
            })
            .state("pieChart.countries", {
                url: "/countries",
                templateUrl: "app/pie-chart/countries.show.html",
                controller: "CountryCtrl as country"
            })
            .state("pieChart.states", {
                url: "/states",
                templateUrl: "app/pie-chart/states.show.html",
                controller: "StateCtrl as state"
            })
            .state("pieChart.cities", {
                url: "/cities",
                templateUrl: "app/pie-chart/cities.show.html",
                controller: "CityCtrl as city"
            });
    });