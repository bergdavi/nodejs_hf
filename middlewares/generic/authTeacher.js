/**
 * Ha a felhasználó nincs bejelentkzve átirányítás: /
 * Ha a felhasználó diákként van bejelentkezve átirányítás: /student
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};