/**
 * Created by anuraagbasu on 22/04/16.
 */

angular.module("countriesApp")
    .controller("RunrateCtrl", function ($scope) {
        var self = this;

        self.runRateData = {
            "chart": {
                "caption": "Score",
                "subCaption": "India",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "paletteColors": "#0075c2,#1aaf5d,#f44336",
                "bgcolor": "#ffffff",
                "xAxisName": "Overs",
                "yAxisName": "Runs Scored"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "5"
                        },
                        {
                            "label": "10"
                        },
                        {
                            "label": "15"
                        },
                        {
                            "label": "20"
                        },
                        {
                            "label": "25"
                        },
                        {
                            "label": "30"
                        },
                        {
                            "label": "35"
                        },
                        {
                            "label": "40"
                        },
                        {
                            "label": "45"
                        },
                        {
                            "label": "50"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Current Run Rate",
                    "data": [
                        {
                            "value": "40"
                        },
                        {
                            "value": "56"
                        },
                        {
                            "value": "97"
                        },
                        {
                            "value": "120"
                        },
                        {
                            "value": "130"
                        },
                        {
                            "value": "139"
                        },
                        {
                            "value": "165"
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        }
                    ]
                },
                {
                    "seriesname": "Projected",
                    "data": [
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": ""
                        },
                        {
                            "value": "165"
                        },
                        {
                            "value": "188"
                        },
                        {
                            "value": "201"
                        },
                        {
                            "value": "234"
                        }
                    ]
                },
                {
                    "seriesname": "Required Run Rate",
                    "data": [
                        {
                            "value": "30"
                        },
                        {
                            "value": "60"
                        },
                        {
                            "value": "90"
                        },
                        {
                            "value": "120"
                        },
                        {
                            "value": "150"
                        },
                        {
                            "value": "180"
                        },
                        {
                            "value": "210"
                        },
                        {
                            "value": "240"
                        },
                        {
                            "value": "270"
                        },
                        {
                            "value": "300"
                        }
                    ]
                }
            ]
        }
    });