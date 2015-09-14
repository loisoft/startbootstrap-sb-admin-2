'use strict';

var Spent = require('mongoose').model('Spent');

exports.areaChart = function (req, res, next) {
  Spent.find({}, function(err, data) {
    console.dir(data);
    res.json(data);
  });
}