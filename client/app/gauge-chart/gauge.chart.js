/**
 * Created by anuraagbasu on 22/04/16.
 */

angular.module("countriesApp")
    .config(function ($stateProvider) {
        $stateProvider
            .state("gauge", {
                url: "/gauge-chart",
                templateUrl: "app/gauge-chart/gauge.chart.html",
                controller: "GaugeCtrl as gauge"
            });
    });