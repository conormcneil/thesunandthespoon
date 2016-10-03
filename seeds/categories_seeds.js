
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('categories').insert({
          id: 1,
          category: 'Entrées'
        }),
        knex('categories').insert({
          id: 2,
          category: 'Sides'
        }),
        knex('categories').insert({
          id: 3,
          category: 'Desserts'
        }),
        knex('categories').insert({
          id: 4,
          category: 'Snacks'
        }),
        knex('categories').insert({
          id: 5,
          category: 'Drinks'
        })
      ]);
    });
};
