var registerMW = require('../middlewares/generic/register');
var logoutMW = require('../middlewares/generic/logout');
var checkUserLoginMW = require('../middlewares/generic/checkUserLogin');
var resetPassMW = require('../middlewares/generic/resetPass');
var renderMW = require('../middlewares/generic/render');

var userModel = require('../models/user');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };

    app.get('/register',
        renderMW(objectRepository, 'register') // register.html
    );

    app.post('/register',
        registerMW(objectRepository)
    );

    app.get('/logout',
        logoutMW(objectRepository)
    );

    app.post('/login',      
        checkUserLoginMW(objectRepository)
    );

    app.get('/forgot',
        renderMW(objectRepository, 'forgot') // forgot.html
    );

    app.post('/forgot',
        resetPassMW(objectRepository)
    );

    app.get('/',      
        renderMW(objectRepository, 'index') // index.html
    ); 
};