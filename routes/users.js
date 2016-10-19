var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* USERS route*/
router.get('/signup', function(req, res, next) {
  res.json('hey!')
});

module.exports = router;
