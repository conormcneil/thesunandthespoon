
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts_images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts_images').insert({
          post_id: 1,
          image_id: 1
        }),
        knex('posts_images').insert({
          post_id: 1,
          image_id: 2
        }),
        knex('posts_images').insert({
          post_id: 2,
          image_id: 3
        })
        knex('posts_images').insert({
          post_id: 2,
          image_id: 4
        })
        knex('posts_images').insert({
          post_id: 2,
          image_id: 5
        })
        knex('posts_images').insert({
          post_id: 2,
          image_id: 6
        })
        knex('posts_images').insert({
          post_id: 2,
          image_id: 7
        })
      ]);
    });
};
