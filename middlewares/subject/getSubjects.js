/**
 * Az adatbázisból kiolvassa az összes tárgyat
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var subjectModel = requireOption(objectrepository, 'subjectModel');

    return function (req, res, next) {
        subjectModel.find({}, (err, results) => {
            if(err || !results) {
                return next();
            }
            res.locals.subjects = results;
            
            return next();
        });
    };
};