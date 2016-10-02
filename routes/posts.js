var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
    .then(function(data) {
      console.log(data);
      knex('posts_images')
        .innerJoin('images','posts_images.image_id','images.id')
        // .where({
        //   post_id: 1 // TODO change to data variable
        // })
        .then(function(img_data) {
          console.log('img_data',img_data);
          res.json({data:data,images:img_data});
        })
    })
});

module.exports = router;
