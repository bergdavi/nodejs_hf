var authStudentMW = require('../middlewares/generic/authStudent');
var getSubjectsMW = require('../middlewares/subject/getSubjects');
var getUserSubjectsMW = require('../middlewares/subject/getUserSubjects');
var getSubjectMW = require('../middlewares/subject/getSubject');
var getStudentMW = require('../middlewares/student/getStudent');
var takeSubjectMW = require('../middlewares/student/takeSubject');
var dropSubjectMW = require('../middlewares/student/dropSubject');
var renderMW = require('../middlewares/generic/render');

var userModel = require('../models/user');
var subjectModel = require('../models/subject');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        subjectModel: subjectModel
    };

    app.get('/student/:studentId/take/:subjectId',
        authStudentMW(objectRepository),
        getStudentMW(objectRepository),
        getSubjectMW(objectRepository),
        takeSubjectMW(objectRepository)
    );

    app.get('/student/:studentId/drop/:subjectId',   
        authStudentMW(objectRepository),
        getStudentMW(objectRepository),
        getSubjectMW(objectRepository),
        dropSubjectMW(objectRepository)
    );

    app.get('/student/:studentId/edit',      
        authStudentMW(objectRepository),
        getStudentMW(objectRepository),
        getSubjectsMW(objectRepository),
        renderMW(objectRepository, 'takedropsubjects') // takedropsubjects.html
    );

    app.get('/student/:studentId',
        authStudentMW(objectRepository),
        getStudentMW(objectRepository),
        getUserSubjectsMW(objectRepository),
        renderMW(objectRepository, 'student') // student.html
    );
};