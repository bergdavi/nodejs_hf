var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
  name: String,
  neptun: String,
  password: String,
  type: String,              // student / teacher
  subjects:  [{
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});

module.exports = User;