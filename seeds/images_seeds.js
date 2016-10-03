
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        // Post 1
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
        // Post 2
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
        }),
        // Post 3
        knex('images').insert({
          id: 8,
          post_id: 3,
          title: "Peachy Keen Cheesecake 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475511370/peach_cheesecake_1_tqnj4z.jpg"
        }),
        knex('images').insert({
          id: 9,
          post_id: 3,
          title: "Peachy Keen Cheesecake 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475511371/peach_cheesecake_2_cmjxke.jpg"
        }),
        knex('images').insert({
          id: 10,
          post_id: 3,
          title: "Peachy Keen Cheesecake 3",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475511370/peach_cheesecake_3_zbays3.jpg"
        }),
        knex('images').insert({
          id: 11,
          post_id: 3,
          title: "Peachy Keen Cheesecake 4",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475511370/peach_cheesecake_4_z5eqyf.jpg"
        }),
        knex('images').insert({
          id: 12,
          post_id: 3,
          title: "Peachy Keen Cheesecake 5",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475511370/peach_cheesecake_5_gi14le.jpg"
        }),
        knex('images').insert({
          id: 13,
          post_id: 3,
          title: "Peachy Keen Cheesecake 6",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475511370/peach_cheesecake_6_zdpajf.jpg"
        })
      ]);
    });
};
