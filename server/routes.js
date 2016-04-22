/**
 * Created by anuraagbasu on 21/04/16.
 */

var config = require("./config/environment");

module.exports = function (app) {

    app.route('/:url(countries|states|cities|gauge-chart)')
        .get(function (req, res) {
            res.sendfile(app.get('appPath') + '/index.html');
        });
};