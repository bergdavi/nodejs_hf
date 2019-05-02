/**
 * Az adatbázisból kiolvassa az összes tanár adatait
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.find({type: "teacher"}, (err, results) => {
            if(err || !results) {
                return next();
            }
            res.locals.teachers = results;
            
            return next();
        });
    };
};