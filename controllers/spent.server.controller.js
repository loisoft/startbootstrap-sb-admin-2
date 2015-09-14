'use strict';

var Spent = require('mongoose').model('Spent');

exports.createSpent = function (req, res, next) {
  var spent = new Spent(req.body);
  spent.save(function(err){
    if (err) {
      next(err);
    }

    res.render('home');
  });

}