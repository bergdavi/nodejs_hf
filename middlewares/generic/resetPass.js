/**
 * Beállítja a felhasználónak az új jelszavát, átirányítás: /
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.neptun === 'undefined' || req.body.neptun === "") || 
            (typeof req.body.password === 'undefined' || req.body.password === "")) {
                res.locals.error = "Mindent ki kell tölteni!";
                return next();
        }

        let neptun = req.body.neptun.toUpperCase();
        
        userModel.findOne({neptun: neptun}, (err, result) => {
            if(err || !result) {
                res.locals.error = "Hibás Neptun!";
                return next();
            }
            result.password = req.body.password;
            result.save((err, result) => {
                res.redirect("/");
            });            
        });
    };
};