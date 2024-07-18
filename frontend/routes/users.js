var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
      
   fetch('http://localhost:3000/users')
          .then(res => res.json())
          .then(response => {
              res.render('users', { title: 'Login page' });
              }); 
  });
          

module.exports = router;
