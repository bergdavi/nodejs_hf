/**
 * Kijelentkezteti a felhasználót, átírányítás: /
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};