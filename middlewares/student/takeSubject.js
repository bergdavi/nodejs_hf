/**
 * A hallagtó felveszi a tárgyat, átirányítás: /student/:studentId/edit
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.user === "undefined" || typeof res.locals.subject === "undefined") {
            return next;
        }

        res.locals.user.subjects.push(res.locals.subject);
        res.locals.user.save((err, result) => {
            res.locals.subject.students.push(res.locals.user);
            res.locals.subject.save((err, result) => {
                res.redirect("/student/" + res.locals.user.id + "/edit");
            });
        });        
    };
};