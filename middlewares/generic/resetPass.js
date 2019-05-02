/**
 * Beállítja a felhasználónak az új jelszavát, átirányítás: /
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.neptun === 'undefined') || 
            (typeof req.body.password === 'undefined')) {
                return next();
        }

        let neptun = req.body.neptun.toUpperCase();
        
        userModel.findOne({neptun: neptun}, (err, result) => {
            if(err || !result) {
                return next();
            }
            result.password = req.body.password;
            result.save((err, result) => {
                res.redirect("/");
            });            
        });
    };
};