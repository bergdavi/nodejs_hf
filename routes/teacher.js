var authTeacherMW = require('../middlewares/generic/authTeacher');
var getSubjectsMW = require('../middlewares/subject/getSubjects');
var renderMW = require('../middlewares/generic/render');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        subjectModel: subjectModel
    };   

    app.get('/teacher/:teacherId',      
        authTeacherMW(objectRepository),
        getSubjectsMW(objectRepository),
        renderMW(objectRepository, 'teacher') // teacher.html
    );
};