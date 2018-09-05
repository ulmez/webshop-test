const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/home', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    message: "First router..."
  });
});

module.exports = router;
