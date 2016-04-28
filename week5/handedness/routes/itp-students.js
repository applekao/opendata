var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  console.log("get/new");
  res.render('itp-students/new',{title : 'Insert New ITP Student'})
});

router.post('/', function(req, res) {
  console.log(req.body);
  // res.render('itp-students/new',{title : 'Inserted!'})
  res.redirect('/itp-students');
});

router.get('/', function(req, res, next) {
  console.log("get/");
  res.render('itp-students/index',{title : 'A sample of New ITP Students handedness'})
});


module.exports = router;
