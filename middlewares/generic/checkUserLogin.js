/**
 * Ellenőrzi a neptun kódot, és a jelszót, ha hibás kiír hiba üzenetet
 * Ha a felhasználó tanár átirányítás: /teacher
 * Ha a felhasználó diák átirányítás: /student
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("checkUserLoginMw");

        let student = true
        if(student) {
            res.redirect("/student/0");
        }
        else {
            res.redirect("/teacher/0");
        }        
    };
};