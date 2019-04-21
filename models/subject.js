var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Subject = db.model('Subject', {
  name: String,
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