var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.post('/id', function(req, res, next) {
  knex('images')
    .where({
      post_id: req.body.id
    })
    .then(function(data) {
      res.json(data);
    })
});

module.exports = router;
