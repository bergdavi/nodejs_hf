var authTeacherMW = require('../middlewares/generic/authTeacher');
var getSubjectsMW = require('../middlewares/subject/getSubjects');
var getUserSubjectsMW = require('../middlewares/subject/getUserSubjects');
var getTeacherMW = require('../middlewares/teacher/getTeacher');
var renderMW = require('../middlewares/generic/render');

var userModel = require('../models/user');
var subjectModel = require('../models/subject');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        subjectModel: subjectModel
    };   

    app.get('/teacher/:teacherId',      
        authTeacherMW(objectRepository),
        getTeacherMW(objectRepository),
        getUserSubjectsMW(objectRepository),        
        renderMW(objectRepository, 'teacher') // teacher.html
    );
};