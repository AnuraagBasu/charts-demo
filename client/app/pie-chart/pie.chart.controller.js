/**
 * Created by anuraagbasu on 19/04/16.
 */

angular.module("countriesApp")
    .controller("CountryCtrl", function ($scope, $http) {
        var self = this;
        self.loaded = false;
        self.completeCountriesData = [];
        self.countriesData = [];
        self.statesToShow = [];
        self.citiesToShow = [];
        self.showStateData = false;
        self.showCitiesData = false;
        self.showTable = false;
        self.selectedCountry = "";
        self.selectedState = "";
        self.selectedCity = "";

        $http.get("/assets/json/countriesData.json").success(function (countriesData) {
            self.completeCountriesData = countriesData;

            _.forEach(_.groupBy(countriesData, "country"), function (value, key) {
                self.countriesData.push({
                    label: key,
                    value: _.sumBy(value, function (obj) {
                        return obj.amount;
                    })
                });


            });

            self.countries = {
                chart: {
                    caption: "Expenditure Profile",
                    subcaption: "Countries",
                    startingangle: "20",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "Expenditure of a Day : $label Total expenditure : $datavalue",
                    theme: "fint"
                },
                data: self.countriesData
            };

            self.loaded = true;
        });

        self.countryEvents = {
            "slicingEnd": function (eventObj, dataObj) {
                self.showStateData = false;
                self.statesToShow = [];
                self.selectedCountry = dataObj.data.label;
                _.forEach(_.groupBy(_.filter(self.completeCountriesData, {"country": self.selectedCountry}), "state"), function (value, key) {
                    self.statesToShow.push({
                        label: key,
                        value: _.sumBy(value, function (obj) {
                            return obj.amount;
                        })
                    });
                });

                self.statesOfSelectedCountry = {
                    chart: {
                        caption: "Expenditure Profile",
                        subcaption: "Country : " + self.selectedCountry,
                        startingangle: "120",
                        showlabels: "0",
                        showlegend: "1",
                        enablemultislicing: "0",
                        slicingdistance: "15",
                        showpercentvalues: "1",
                        showpercentintooltip: "0",
                        plottooltext: "Expenditure of a Day : $label Total expenditure : $datavalue",
                        theme: "fint"
                    },
                    data: self.statesToShow
                };

                self.showStateData = true;
                $scope.$apply();
            }
        };

        self.stateEvents = {
            "slicingEnd": function (eventObj, dataObj) {
                self.showCitiesData = false;
                self.citiesToShow = [];
                self.selectedState = dataObj.data.label;
                var criteria = {"state": self.selectedState};
                if (self.selectedCountry) {
                    criteria.country = self.selectedCountry;
                }
                _.forEach(_.groupBy(_.filter(self.completeCountriesData, criteria), "city"), function (value, key) {
                    self.citiesToShow.push({
                        label: key,
                        value: _.sumBy(value, function (obj) {
                            return obj.amount;
                        })
                    });
                });

                self.citiesOfSelectedState = {
                    chart: {
                        caption: "Expenditure Profile",
                        subcaption: "State : " + self.selectedState,
                        startingangle: "20",
                        showlabels: "0",
                        showlegend: "1",
                        enablemultislicing: "0",
                        slicingdistance: "15",
                        showpercentvalues: "1",
                        showpercentintooltip: "0",
                        plottooltext: "Expenditure of a Day : $label Total expenditure : $datavalue",
                        theme: "fint"
                    },
                    data: self.citiesToShow
                };

                self.showCitiesData = true;
                $scope.$apply();
            }
        };

        self.cityEvents = {
            "slicingEnd": function (eventObj, dataObj) {
                self.showTable = false;
                self.cityToShowInTable = {};
                self.selectedCity = dataObj.data.label;
                var criteria = {"state": self.selectedState, "city": self.selectedCity};
                if (self.selectedCountry) {
                    criteria.country = self.selectedCountry;
                }

                self.cityToShowInTable = _.filter(self.completeCountriesData, criteria);

                self.showTable = true;
                $scope.$apply();
            }
        };
    })
    .controller("StateCtrl", function ($scope, $http) {
        var self = this;
        self.loaded = false;
        self.completeCountriesData = [];
        self.stateData = [];
        self.statesToShow = [];
        self.citiesToShow = [];
        self.showStateData = false;
        self.showCitiesData = false;
        self.showTable = false;
        self.selectedCountry = "";
        self.selectedState = "";
        self.selectedCity = "";

        $http.get("/assets/json/countriesData.json").success(function (countriesData) {
            self.completeCountriesData = countriesData;

            _.forEach(_.groupBy(countriesData, "state"), function (value, key) {
                self.stateData.push({
                    label: key,
                    value: _.sumBy(value, function (obj) {
                        return obj.amount;
                    })
                })
            });

            self.states = {
                chart: {
                    caption: "Expenditure Profile",
                    subcaption: "States",
                    startingangle: "120",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "Expenditure of a Day : $label Total expenditure : $datavalue",
                    theme: "fint"
                },
                data: self.stateData
            };

            self.loaded = true;
        });

        self.stateEvents = {
            "slicingEnd": function (eventObj, dataObj) {
                self.showCitiesData = false;
                self.citiesToShow = [];
                self.selectedState = dataObj.data.label;
                var criteria = {"state": self.selectedState};
                if (self.selectedCountry) {
                    criteria.country = self.selectedCountry;
                }
                _.forEach(_.groupBy(_.filter(self.completeCountriesData, criteria), "city"), function (value, key) {
                    self.citiesToShow.push({
                        label: key,
                        value: _.sumBy(value, function (obj) {
                            return obj.amount;
                        })
                    });
                });

                self.citiesOfSelectedState = {
                    chart: {
                        caption: "Expenditure Profile",
                        subcaption: "State : " + self.selectedState,
                        startingangle: "20",
                        showlabels: "0",
                        showlegend: "1",
                        enablemultislicing: "0",
                        slicingdistance: "15",
                        showpercentvalues: "1",
                        showpercentintooltip: "0",
                        plottooltext: "Expenditure of a Day : $label Total expenditure : $datavalue",
                        theme: "fint"
                    },
                    data: self.citiesToShow
                };

                self.showCitiesData = true;
                $scope.$apply();
            }
        };

        self.cityEvents = {
            "slicingEnd": function (eventObj, dataObj) {
                self.showTable = false;
                self.cityToShowInTable = {};
                self.selectedCity = dataObj.data.label;
                var criteria = {"state": self.selectedState, "city": self.selectedCity};
                if (self.selectedCountry) {
                    criteria.country = self.selectedCountry;
                }

                self.cityToShowInTable = _.filter(self.completeCountriesData, criteria);

                self.showTable = true;
                $scope.$apply();
            }
        };
    })
    .controller("CityCtrl", function ($scope, $http) {
        var self = this;
        self.loaded = false;
        self.completeCountriesData = [];
        self.cityData = [];
        self.statesToShow = [];
        self.citiesToShow = [];
        self.showStateData = false;
        self.showCitiesData = false;
        self.showTable = false;
        self.selectedCountry = "";
        self.selectedState = "";
        self.selectedCity = "";

        $http.get("/assets/json/countriesData.json").success(function (countriesData) {
            self.completeCountriesData = countriesData;

            _.forEach(countriesData, function (value, key) {
                self.cityData.push({
                    label: value.city,
                    value: value.amount
                });
            });

            self.cities = {
                chart: {
                    caption: "Expenditure Profile",
                    subcaption: "Cities",
                    startingangle: "120",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "Expenditure of a Day : $label Total expenditure : $datavalue",
                    theme: "fint"
                },
                data: self.cityData
            };

            self.loaded = true;
        });

        self.cityEvents = {
            "slicingEnd": function (eventObj, dataObj) {
                self.showTable = false;
                self.cityToShowInTable = {};
                self.selectedCity = dataObj.data.label;
                var criteria = {"city": self.selectedCity};
                if (self.selectedCountry) {
                    criteria.country = self.selectedCountry;
                }
                if (self.selectedState) {
                    criteria.state = self.selectedState;
                }

                self.cityToShowInTable = _.filter(self.completeCountriesData, criteria);

                self.showTable = true;
                $scope.$apply();
            }
        };
    });