/**
 * Ha a felhasználó nincs bejelentkzve átirányítás: /
 * Ha a felhasználó tanárként van bejelentkezve átirányítás: /teacher
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("authStudentMW");

        res.locals.user = {};
        res.locals.user.id = 0;

        return next();
    };
};