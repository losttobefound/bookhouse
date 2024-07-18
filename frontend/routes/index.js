var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(response => {
              res.render('index', { title: 'Home Page' });
              }); 
});

module.exports = router;
