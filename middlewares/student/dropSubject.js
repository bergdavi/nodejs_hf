/**
 * A hallagtó leadja a tárgyat, átirányítás: /student/:studentId/edit
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.user === "undefined" || typeof res.locals.subject === "undefined") {
            return next;
        }
        let idx = res.locals.user.subjects.indexOf(res.locals.subject._id);
        res.locals.user.subjects.splice(idx,1);
        res.locals.user.save((err, result) => {
            let idx = res.locals.subject.students.indexOf(res.locals.user);
            res.locals.subject.students.splice(idx,1);
            res.locals.subject.save((err, result) => {
                res.redirect("/student/" + res.locals.user.id + "/edit");
            });
        });    
    };
};