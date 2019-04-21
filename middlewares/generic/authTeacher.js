/**
 * Ha a felhasználó nincs bejelentkzve átirányítás: /
 * Ha a felhasználó diákként van bejelentkezve átirányítás: /student
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.session.userid === 'undefined') {
            return res.redirect('/');
        }

        if(req.session.userid !== req.param('teacherId') && typeof req.param('teacherId') !== 'undefined') {
            return res.redirect('/');
        }

        res.locals.user = {};
        res.locals.user.id = 0;

        return next();
    };
};