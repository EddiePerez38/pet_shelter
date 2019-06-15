//Imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var flash = require("express-flash");
var session = require('express-session');

//Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.use(express.static( __dirname + '/public/dist/public' ));


app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//Database
mongoose.connect('mongodb://localhost/pet_shelter', { useNewUrlParser: true });
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes.js')(app);

//Port
app.listen(8000, function () {
    console.log("listening on port 8000");
})