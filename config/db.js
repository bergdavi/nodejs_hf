var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/EB2DYD', {useNewUrlParser: true});

module.exports = mongoose;