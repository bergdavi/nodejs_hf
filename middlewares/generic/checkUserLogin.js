/**
 * Ellenőrzi a neptun kódot, és a jelszót, ha hibás kiír hiba üzenetet
 * Ha a felhasználó tanár átirányítás: /teacher
 * Ha a felhasználó diák átirányítás: /student
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};