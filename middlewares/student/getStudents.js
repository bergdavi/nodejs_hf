/**
 * Az adatbázisból kiolvassa az adott tárgyat hallgatók nevét
*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getStudentsMW");
        res.locals.subject = {};
        res.locals.subject.name = "Fizika";
        res.locals.subject.students =[
            "Hallgató 1", "Hallgató 2", "Hallgató 3", "Hallgató 4"
        ];

        return next();
    };
};