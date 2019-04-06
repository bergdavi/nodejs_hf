/**
 * A hallagtó felveszi a tárgyat, átirányítás: /student/:studentId/edit
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("takeSubjectMW");
        res.redirect("/student/" + res.locals.user.id + "/edit");
    };
};