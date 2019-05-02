/**
 * Az adatbázisból kiolvassa egy diák adatait
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.findOne({_id: req.param('studentId')}, (err, result) => {
            if(err || !result) {
                return next();
            }
            res.locals.user = result;         
            return next();
        });
    };
};