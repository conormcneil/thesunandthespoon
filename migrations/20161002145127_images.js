
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images',function(table) {
    table.increments();
    table.integer('post_id');
    table.string('title');
    table.string('url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
