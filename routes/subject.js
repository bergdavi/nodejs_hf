var authTeacherMW = require('../middlewares/generic/authTeacher');
var getTeachersMW = require('../middlewares/teacher/getTeachers');
var deleteSubjectMW = require('../middlewares/subject/deleteSubject');
var editSubjectMW = require('../middlewares/subject/editSubject');
var getSubjectMW = require('../middlewares/subject/getSubject');
var getSubjectsMW = require('../middlewares/subject/getSubjects');
var getStudentsMW = require('../middlewares/student/getStudents');
var renderMW = require('../middlewares/generic/render');

var userModel = require('../models/user');
var subjectModel = require('../models/subject');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        subjectModel: subjectModel
    };   

    app.get('/subjects',
        authTeacherMW(objectRepository),
        getSubjectsMW(objectRepository),
        renderMW(objectRepository, 'editsubjects') // editsubjects.html
    );

    app.get('/subjects/new',
        authTeacherMW(objectRepository),
        getTeachersMW(objectRepository),
        renderMW(objectRepository, 'editsubject') // editsubject.html
    );

    app.post('/subjects/new',
        authTeacherMW(objectRepository),
        editSubjectMW(objectRepository)        
    );

    app.get('/subject/:subjectId/edit',
        authTeacherMW(objectRepository),
        getSubjectMW(objectRepository),
        getTeachersMW(objectRepository),
        renderMW(objectRepository, 'editsubject') // editsubject.html
    );

    app.post('/subject/:subjectId/edit',
        authTeacherMW(objectRepository),
        editSubjectMW(objectRepository)        
    );

    app.get('/subject/:subjectId/delete',
        authTeacherMW(objectRepository),
        deleteSubjectMW(objectRepository)        
    );

    app.get('/subject/:subjectId/students',
        authTeacherMW(objectRepository),
        getStudentsMW(objectRepository),
        renderMW(objectRepository, 'students') // students.html
    );
};