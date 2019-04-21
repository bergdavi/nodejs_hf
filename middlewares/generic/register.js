/**
 * Létrehoz egy új felhasználót, átirányítás: /
 */
var requireOption = require('../common').requireOption;
 
module.exports = function (objectrepository) {
    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        console.log("registerMW");
        
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.neptun === 'undefined') || 
            (typeof req.body.password === 'undefined') ||
            (typeof req.body.name === 'undefined')||
            (typeof req.body.type === 'undefined') ||
            (req.body.type !== 'student' && req.body.type !== "teacher")) {
                return next();
        }

        var user = new userModel();
        user.neptun = req.body.neptun.toUpperCase();
        user.password = req.body.password;
        user.name = req.body.name;
        user.type = req.body.type;

        user.save((err, result) => {
            if(err) {
                return next(err);
            }
            res.redirect("/");
        });        
    };
};