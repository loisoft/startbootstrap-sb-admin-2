var express = require('express');
var router = express.Router();
var Category = require('mongoose').model('Category');
router.get('/', function (req, res, next) {
  Category.find({}, function(err, data){
    console.dir(data);
    res.render('blank', {cates: data});
  });
});

module.exports = router;