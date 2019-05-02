/**
 * Az adatbázisból kiolvassa a megfelelő tárgy adatait
*/
let requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    let subjectModel = requireOption(objectrepository, 'subjectModel');

    return function (req, res, next) {
        subjectModel.findOne({_id: req.param('subjectId')}, (err, result) => {
            if(err || !result) {
                return next();
            }
            res.locals.subject = result;
            return next();
        });        
    };
};