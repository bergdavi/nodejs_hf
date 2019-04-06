/**
 * Módosítja a megfelelő tárgy adatait, átriányítás: /subjects
*/
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("editSubjectMW");
        res.redirect("/subjects");
    };
};