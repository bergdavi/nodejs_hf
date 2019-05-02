/**
 * Ha a felhasználó nincs bejelentkzve átirányítás: /
 * Ha a felhasználó tanárként van bejelentkezve átirányítás: /teacher
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        // if(typeof req.session.userid === 'undefined') {
        //     return res.redirect('/');
        // }

        // if(req.session.userid !== req.param('studentId')) {
        //     return res.redirect('/');
        // }

        res.locals.user = {};
        res.locals.user.id = req.session.userid;

        return next();
    };
};