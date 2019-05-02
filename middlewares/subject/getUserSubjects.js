/**
 * Az adatbázisból kiolvassa a felhasználó tárgyait
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var subjectModel = requireOption(objectrepository, 'subjectModel');

    return function (req, res, next) {
        subjectModel.find({_id: {$in: res.locals.user.subjects}}, (err, results) => {
            if(err || !results) {
                return next();
            }
            res.locals.user.subjects = results;
            return next();
        });
    };
};