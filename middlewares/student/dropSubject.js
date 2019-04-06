/**
 * A hallagtó leadja a tárgyat, átirányítás: /student/:studentId/edit
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("dropSubjectMW");
        res.redirect("/student/" + res.locals.user.id + "/edit");
    };
};