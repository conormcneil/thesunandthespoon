
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('images').insert({
          post_id: 1,
          title: "Buddha Bowls 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475441459/buddha_bowls_1_vwecne.jpg"
        }),
        knex('images').insert({
          post_id: 1,
          title: "Buddha Bowls 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475441460/buddha_bowls_2_be2uft.jpg"
        })
      ]);
    });
};
