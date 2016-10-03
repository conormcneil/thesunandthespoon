var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.post('/id', function(req, res, next) {
  var category_id = req.body.id;
  knex('categories')
    .where({
      id: req.body.id
    })
    .first()
    .then(function(category) {
      res.json(category);
    })
});

module.exports = router;
