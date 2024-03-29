/**
 * Az adatbázisból kiolvassa az összes hallagtó nevét
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.find({type: "student"}, (err, results) => {
            if(err || !results) {
                return next();
            }
            res.locals.students = results;
            
            return next();
        });
    };
};