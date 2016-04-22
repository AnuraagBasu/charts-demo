/**
 * Created by anuraagbasu on 22/04/16.
 */

angular.module("countriesApp")
    .config(function ($stateProvider) {
        $stateProvider
            .state("runrate", {
                url: "/runrate",
                templateUrl: "app/line-chart/line.chart.html",
                controller: "RunrateCtrl as runrate"
            });
    });