const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://superman:thebest1@ds123012.mlab.com:23012/webshop', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

//var router = express.Router();

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
}, {collection: 'user'});

var User = mongoose.model('User', userSchema);

router.get('/', function(req, res, next) {
  User.find()
      .then(function(data) {
          res.json(data);
      });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    message: "First router..."
  });
});

module.exports = router;
