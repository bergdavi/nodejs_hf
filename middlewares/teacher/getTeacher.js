/**
 * Az adatbázisból kiolvassa egy tanár adatait
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.findOne({_id: req.param('teacherId')}, (err, result) => {
            if(err || !result) {
                return next();
            }
            res.locals.user = result;         
            return next();
        });
    };
};