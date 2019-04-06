/**
 * Törli a megfelelő tárgyat az adatbázisból, átirányítás: /subjects
*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("deleteSubjectMW");
        res.redirect("/subjects");
    };
};