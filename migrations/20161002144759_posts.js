
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts',function(table) {
    table.increments();
    table.string('title');
    table.string('headline');
    table.string('date');
    table.integer('category_id');
    table.text('body','longtext'); // Stored as HTML
    table.text('ingredients','longtext'); // Stored as HTML
    table.text('instructions','longtext'); // Stored as HTML
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
