var express = require('express');
var router = express.Router();
var axios = require('axios');

async function saveFile(file) {
  // Move the file to the public/uploads folder
  await file.mv('public/uploads/' + file.name);
  // Get the complete path of the file
  let filename = process.cwd() + '/public/uploads/' + file.name;
  return filename;
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('http://localhost:3000/');
    console.log(response.data);
    res.render('index', { posts: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
