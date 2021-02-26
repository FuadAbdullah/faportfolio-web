// Load Node Modules
var express = require('express');
const ejs = require('ejs');
// Initialize Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port the website will run on
app.listen(3001);

// **** GET Routes - display pages ****
// Root Routes
app.get('/', function (req, res) {
    res.render('pages/index');
});
// To Home
app.get('/index.html', function (req, res) {
    res.render('pages/index');
});
// To Contact
app.get('/contact.html', function (req, res) {
    res.render('pages/contact');
});
// To Hire Me
app.get('/hire-me.html', function (req, res) {
    res.render('pages/hire-me');
});
// To Projects Grid
app.get('/projects-grid-cards.html', function (req, res) {
    res.render('pages/projects-grid-cards');
});
// To CV
app.get('/cv.html', function (req, res) {
    res.render('pages/cv');
});
// *************************************
