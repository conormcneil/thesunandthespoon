var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.post('/id', function(req, res, next) {
  console.log(req.body.id);
  knex('images')
    .where({
      post_id: req.body.id
    })
    // .innerJoin('posts_images','images.id','posts_images.image_id')
    .then(function(data) {
      console.log(data);
      res.json(data);
    })
});

module.exports = router;
