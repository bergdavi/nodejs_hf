/**
 * Módosítja a megfelelő tárgy adatait, átriányítás: /subjects
*/
var requireOption = require('../common').requireOption;


module.exports = function (objectrepository) {
    var subjectModel = requireOption(objectrepository, 'subjectModel');
    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        
        if ((typeof req.body === 'undefined') ||
            (typeof req.body.name === 'undefined') || 
            (typeof req.body.teacher === 'undefined') ||
            (typeof req.body.day === 'undefined')||
            (typeof req.body.start === 'undefined') ||
            (typeof req.body.end === 'undefined')) {
                return next();
        }

        let startTime = req.body.start.split(":");
        let endTime = req.body.end.split(":");
        if( isNaN(parseInt(startTime[0])) ||
            isNaN(parseInt(startTime[1])) || 
            isNaN(parseInt(endTime[0])) || 
            isNaN(parseInt(endTime[1]))) {
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
                return next();
            }

            let days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];        
            subject.name = req.body.name;
            subject.teacher = result;
            subject.teacherName = result.name;
            subject.day = days.indexOf(req.body.day)+1;
            subject.start = parseInt(startTime[0]) + ":" + parseInt(startTime[1]);
            subject.end = parseInt(endTime[0]) + ":" + parseInt(endTime[1]);
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