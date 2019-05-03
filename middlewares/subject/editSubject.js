/**
 * Módosítja a megfelelő tárgy adatait, átriányítás: /subjects
*/
var requireOption = require('../common').requireOption;


module.exports = function (objectrepository) {
    var subjectModel = requireOption(objectrepository, 'subjectModel');
    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.name === 'undefined' || req.body.name === "") || 
            (typeof req.body.teacher === 'undefined') ||
            (typeof req.body.day === 'undefined')||
            (typeof req.body.start === 'undefined' || req.body.start === "") ||
            (typeof req.body.end === 'undefined' || req.body.end === "")) {
                res.locals.error = "Mindent ki kell tölteni";
                return next();
        }

        let startTime = req.body.start.split(":");
        let endTime = req.body.end.split(":");
        if( isNaN(parseInt(startTime[0])) ||
            isNaN(parseInt(startTime[1])) || 
            isNaN(parseInt(endTime[0])) || 
            isNaN(parseInt(endTime[1]))) {
                res.locals.error = "Érvénytelen időpont!";
                return next();
        }

        let subject = undefined;
        let oldTeacherId = 0;

        if(typeof res.locals.subject != "undefined") {
            subject = res.locals.subject;
            oldTeacherId = subject.teacher._id;
        }
        else {
            subject = new subjectModel();
        }        
          
    
        userModel.findOne({name: req.body.teacher}, (err, result) => {
            if(err || !result) {
                res.locals.error = "Érvénytelen tanár!";
                return next();
            }

            let days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];        
            subject.name = req.body.name;
            subject.teacher = result;
            subject.teacherName = result.name;
            subject.day = days.indexOf(req.body.day)+1;
            if(subject.day < 1 || subject.day > 5) {
                res.locals.error = "Érvénytelen nap!";
                return next();
            }
            let startFirstDigit = parseInt(startTime[0]).toString();
            let startLastDigit = parseInt(startTime[1]).toString();
            let endFirstDigit = parseInt(endTime[0]).toString();
            let endLastDigit = parseInt(endTime[1]).toString();
            if(startLastDigit.length === 1) {
                startLastDigit = "0" + startLastDigit;
            }
            if(endLastDigit.length === 1) {
                endLastDigit = "0" + endLastDigit;
            }
            subject.start = startFirstDigit + ":" + startLastDigit;
            subject.end = endFirstDigit + ":" + endLastDigit;
            result.subjects.push(subject);
            result.save((err, result) => {
                if(err) {
                    return next(err);
                }
                subject.save((err, result) => {                                   
                    userModel.findOne({_id: oldTeacherId}, (err, result) => {
                        if(typeof result !== undefined && result) {
                            let idx = result.subjects.indexOf(subject._id);
                            result.subjects.splice(idx, 1);
                            result.save((err, result) => {
                                res.redirect("/subjects");        
                            });
                        }
                        else {
                            res.redirect("/subjects");
                        }  
                    });
                    
                });       
            });
        });
            
          
    };
};