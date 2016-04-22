/**
 * Created by anuraagbasu on 22/04/16.
 */

angular.module("countriesApp")
    .controller("GaugeCtrl", function ($scope) {
        var self = this;

        self.gaugeData = {
            "chart": {
                "caption": "Customer Satisfaction Score",
                "subcaption": "Last week",
                "lowerLimit": "0",
                "upperLimit": "100",
                "theme": "fint"
            },
            "colorRange": {
                "color": [
                    {
                        "minValue": "0",
                        "maxValue": "33",
                        "code": "#e44a00"
                    },
                    {
                        "minValue": "33",
                        "maxValue": "66",
                        "code": "#f8bd19"
                    },
                    {
                        "minValue": "66",
                        "maxValue": "100",
                        "code": "#6baa01"
                    }
                ]
            },
            "dials": {
                "dial": [
                    {
                        "value": "0"
                    }
                ]
            }
        };

        self.changeGaugeDial = function () {
            var valueToPointTo = self.gaugeValue;
            if (!self.gaugeValue) {
                valueToPointTo = 0;

            } else if (self.gaugeValue>0 && self.gaugeValue<=33) {
                valueToPointTo = 17;

            } else if (self.gaugeValue>33 && self.gaugeValue<=66) {
                valueToPointTo = 50;

            } else {
                valueToPointTo = 83
            }

            self.gaugeData.dials = {
                "dial": [
                    {
                        value: valueToPointTo
                    }
                ]
            };
        }
    });