var express = require('express');
var app = express();


app.set('view engine', 'ejs');


app.use(express.static('static'));

require('./routes/student')(app);
require('./routes/teacher')(app);
require('./routes/subject')(app);
require('./routes/outside')(app);

var server = app.listen(3000, function () {
    console.log('Open: 3000');
});