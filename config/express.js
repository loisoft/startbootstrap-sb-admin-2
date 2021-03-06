// Invoke 'strict' JavaScript mode
'use strict';

var express = require('express');
var passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var routes = require('../routes/index');
var users = require('../routes/users');
var flot = require('../routes/flot');
var morris = require('../routes/morris');
var tables = require('../routes/table');
var forms = require('../routes/forms');
var icons = require('../routes/icons');
var notifications = require('../routes/notifications');
var panelwells = require('../routes/panels-wells');
var typography = require('../routes/typography');
var buttons = require('../routes/buttons');
var grid = require('../routes/grid');
var login = require('../routes/login');
var blank = require('../routes/blank');

var app = express();

module.exports = function () {
  // view engine setup
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.use('/js', express.static(path.join(__dirname, '../js')));

  // Configure the flash messages middleware
  app.use(flash());

  // Configure the Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', routes);
  app.use('/users', users);
  app.use('/flot', flot);
  app.use('/morris', morris);
  app.use('/tables', tables);
  app.use('/forms', forms);
  app.use('/icons', icons);
  app.use('/notifications', notifications);
  app.use('/panels-wells', panelwells);
  app.use('/typography', typography);
  app.use('/buttons', buttons);
  app.use('/grid', grid);
  app.use('/login', login);
  app.use('/blank', blank);

  var spent = require('../controllers/spent.server.controller');
  app.route('/spents').post(spent.createSpent);

// catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handlers

// development error handler
// will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

// production error handler
// no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  return app;
}