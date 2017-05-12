
// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************
var db = require("../models")
var sequelize = require('sequelize');
var fs = require('fs')
const util = require('util')


module.exports = function(app, passport, bodyParser) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());


  app.get('/', function(req, res) {
    res.render('index.ejs'); // load the index.ejs file
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }),
        function(req, res) {
            console.log("test");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // PROFILE SECTION =========================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
    });

  });

/*  app.get('/api', isLoggedIn, function(req, res) {
    db.Activity.findAll({
      where: {
        catagory: "sports"
      }
    }).then(function(data){
      console.log(data[0].get({plain: true}));
      res.json(data);
    });
  });*/

  app.post('/api', function(req, res) {
    db.Activity.create({
      name: req.body.name,
      activity: req.body.activity,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      catagory: req.body.catagory

    }).then(function(retAct){
      res.json(retAct);
    });

    console.log(req.body);
    //res.json({message: 'it works'});

  });

  app.get('/business', isLoggedIn, function(req, res) {
       db.Activity.findAll({
      where: {
      catagory: "business"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('business.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
    app.get('/event', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "event"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('event.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/fishing', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "fishing"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('fishing.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });  
  app.get('/historic', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "historic"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('historic.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/outdoor', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "outdoor"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('outdoor.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/pet', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "pet"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('pet.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/rec', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "rec"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('rec.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/restaurant', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "restaurant"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('restaurant.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/scenic', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "scenic"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('scenic.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });
  app.get('/sports', isLoggedIn, function(req, res) {
      db.Activity.findAll({
      where: {
      catagory: "sports"
      }
    }).then(function(data){
      //console.log(data[0].get({plain: true}));
      console.log(data);
      
      res.render('sports.ejs', {
        user: req.user,
        Activity: data

      });
    
    });
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};//end export func.

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}

// Requiring our model
// var db = require("../models");

