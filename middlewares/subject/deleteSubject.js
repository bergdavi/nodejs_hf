/**
 * Törli a megfelelő tárgyat az adatbázisból, átirányítás: /subjects
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        if(typeof res.locals.subject === "undefined") {
            return next();
        }
        userModel.findOne({_id: res.locals.subject.teacher._id}, (err, result) => {
            if(err || !result) {
                return next();
            }
            let idx = result.subjects.indexOf(res.locals.subject._id);
            result.subjects.splice(idx, 1);
            result.save((err, result) => {
                res.locals.subject.remove((err) => {
                    if(err) {
                        return next("err");
                    }
                    res.redirect("/subjects");
                });    
            });            
        });        
    };
};