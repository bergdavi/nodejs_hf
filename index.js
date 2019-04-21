var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(session({
    secret: 'hunter2',
    cookie: {
      maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./routes/student')(app);
require('./routes/teacher')(app);
require('./routes/subject')(app);
require('./routes/outside')(app);

app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');
    console.error(err.stack);
});

var server = app.listen(3000, function () {
    console.log('Open: 3000');
});