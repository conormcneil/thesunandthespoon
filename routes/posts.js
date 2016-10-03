var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
    .then(function(data) {
      console.log('data',data);
      // knex('posts_images')
        // .where({
        //   post_id: data.id
        // })
        // .innerJoin('images','posts_images.image_id','images.id')
        // .then(function(img_data) {
        //   console.log('img_data',img_data);
          res.json({data:data});
        // })
    })
});

module.exports = router;
