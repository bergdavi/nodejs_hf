/**
 * Ellenőrzi a neptun kódot, és a jelszót, ha hibás kiír hiba üzenetet
 * Ha a felhasználó tanár átirányítás: /teacher
 * Ha a felhasználó diák átirányítás: /student
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        if ((typeof req.body === 'undefined')||
            (typeof req.body.neptun === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            res.locals.error = "Mindent ki kell tölteni!";
            return next();
        }

        let neptun = req.body.neptun.toUpperCase();

        userModel.findOne({neptun: neptun}, (err, result) => {
            if(err || !result) {
                res.locals.error = "Nem sikerült belépni!";
                return next();
            }

            if(result.password !== req.body.password) {
                res.locals.error = "Rossz jelszó!";
                return next();
            }

            req.session.userid = result._id;

            if(result.type === "student") {
                res.redirect("/student/" + req.session.userid);
            }
            else {
                res.redirect("/teacher/" + req.session.userid);
            }
        });

                
    };
};