/**
 * Létrehoz egy új felhasználót, átirányítás: /
 */
var requireOption = require('../common').requireOption;
 
module.exports = function (objectrepository) {
    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {        
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.neptun === 'undefined' || req.body.neptun === "") || 
            (typeof req.body.password === 'undefined' || req.body.password === "") ||
            (typeof req.body.name === 'undefined' || req.body.name === "")||
            (typeof req.body.type === 'undefined') ||
            (req.body.type !== 'student' && req.body.type !== "teacher")) {
                res.locals.error = "Mindent ki kell tölteni!";
                return next();
        }

        let neptun = req.body.neptun.toUpperCase();

        // Ellenőrzi, hogy egyedi legyen a neptun
        userModel.findOne({neptun: neptun}, (err, result) => {
            if(err) {
                res.locals.error = err;
                return next();
            }
            if(result) {
                res.locals.error = "Már létezik a Neptun kód";
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
        });

       
    };
};