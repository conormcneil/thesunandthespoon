var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
    .then(function(data) {
      res.json({data:data});
    })
});

router.get('/details/:id', function(req, res, next) {
  knex('posts')
    .where({
      id: req.params.id
    })
    .first()
    .then(function(data) {
      res.json({data:data});
    })
});

module.exports = router;
