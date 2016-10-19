var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* USERS route*/
router.post('/check/all', function(req, res, next) {
  knex('users')
    .where({
      email: req.body.email
    })
    .first()
    .then(function(data) {
      return !data ? res.json(false) : res.json(true);
    });
});

module.exports = router;
