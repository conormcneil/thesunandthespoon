
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts',function(table) {
    table.increments();
    table.string('title');
    table.string('headline');
    table.string('date');
    table.integer('category');
    table.text('body','longtext');
    table.text('ingredients','longtext');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
