
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('images').insert({
          id: 1,
          post_id: 1,
          title: "Buddha Bowls 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475441459/buddha_bowls_1_vwecne.jpg"
        }),
        knex('images').insert({
          id: 2,
          post_id: 1,
          title: "Buddha Bowls 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475441460/buddha_bowls_2_be2uft.jpg"
        }),
        knex('images').insert({
          id: 3,
          post_id: 2,
          title: "Acai Bowl 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475450833/acai_bowl_1_stvw1n.jpg"
        }),
        knex('images').insert({
          id: 4,
          post_id: 2,
          title: "Acai Bowl 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475450833/acai_bowl_2_mm1y8d.jpg"
        }),
        knex('images').insert({
          id: 5,
          post_id: 2,
          title: "Acai Bowl 3",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475450832/acai_bowl_3_nt4ggw.jpg"
        }),
        knex('images').insert({
          id: 6,
          post_id: 2,
          title: "Acai Bowl 4",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475450833/acai_bowl_4_ofllz1.jpg"
        }),
        knex('images').insert({
          id: 7,
          post_id: 2,
          title: "Acai Bowl 5",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475450831/acai_bowl_5_lujn57.jpg"
        })
      ]);
    });
};
