var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Subject = db.model('Subject', {
  name: String,
  start: String,
  end: String,
  day: Number,
  teacherName: String,
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  students:  [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = Subject;