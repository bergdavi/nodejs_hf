/**
 * Beállítja a felhasználónak az új jelszavát, átirányítás: /
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};