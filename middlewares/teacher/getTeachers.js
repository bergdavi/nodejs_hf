/**
 * Az adatbázisból kiolvassa az összes tanár nevét
*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getTeachersMW");
        res.locals.teachers = [
            "Mézga Géza", "Minta Aladár", "Micimackó"
        ];
        return next();
    };
};