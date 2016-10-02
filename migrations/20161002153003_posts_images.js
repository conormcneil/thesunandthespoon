
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts_images',function(table) {
    table.increments();
    table.integer('post_id');
    table.integer('image_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts_images')
};
