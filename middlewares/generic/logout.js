/**
 * Kijelentkezteti a felhasználót, átírányítás: /
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("logoutMW");
        res.redirect("/");
    };
};