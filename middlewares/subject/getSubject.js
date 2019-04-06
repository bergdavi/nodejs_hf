/**
 * Az adatbázisból kiolvassa a megfelelő tárgy adatait
*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getSubjectMW");
        res.locals.subject = {};
        res.locals.subject.id = 0;
        res.locals.subject.name = "Analízis";
        res.locals.subject.teacher = "Minta Aladár";
        res.locals.subject.day = 3;
        res.locals.subject.start = "8:00";
        res.locals.subject.end = "10:00";
        return next();
    };
};