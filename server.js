// **** Server Related Configuration ****
// Load Node Modules
var express = require('express');
const ejs = require('ejs');
// Initialize Express
var app = express();
// Render static files
app.use(express.static('public', {extensions: ['html']}));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port the website will run on
app.listen(3001);
// **************************************

// **** URL Parameters Variables ****
// Render Functions
// A function to render index.html
var rootPage = function(req, res) {
    res.render('pages/index');
};
// A function to render contact.html
var contactPage = function(req, res) {
    res.render('pages/contact');
};
// A function to render hire-me.html
var hirePage = function(req, res){
    res.render('pages/hire-me');
};
// A function to render projects-grid-cards.html
var projectPage = function(req, res){
    res.render('pages/projects-grid-cards');
};
// A function to render cv.html
var cvPage = function(req, res){
    res.render('pages/cv');
}

// URL Params Strings
// An array to store URL params pointing towards index page
var indexParams = ['/', '/home'];
// A string to store URL params pointing towards contact page
var contactParams = '/contactme';
// A string to store URL params pointing towards hire me page
var hireParams = '/hireme'; 
// A string to store URL params pointing towards project page
var projectParams = '/projects';
// A string to store URL params pointing towards cv page
var cvParams = '/cv';
// **********************************

// **** Routes to Pages ****
// Root Routes
app.route(indexParams).get(rootPage);
// To Contact
app.route(contactParams).get(contactPage);
// To Hire Me
app.route(hireParams).get(hirePage);
// To Projects Grid
app.route(projectParams).get(projectPage);
// To CV
app.route(cvParams).get(cvPage);
// *************************
