/**
 * Létrehoz egy új felhasználót, átirányítás: /
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};