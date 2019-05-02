/**
 * Kijelentkezteti a felhasználót, átírányítás: /
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.userid = 0;
        res.redirect("/");
    };
};