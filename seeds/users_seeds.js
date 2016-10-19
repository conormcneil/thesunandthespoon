
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          name: 'Shelby',
          email: 'shelby@shelby.com',
          password: 'shelby',
          admin: true
        }),
        knex('users').insert({
          id: 2,
          name: 'Conor',
          email: 'conor@conor.com',
          password: 'conor',
          admin: true
        }),
        knex('users').insert({
          id: 3,
          name: 'David',
          email: 'david@david.com',
          password: 'david',
          admin: false
        })
      ]);
    });
};
