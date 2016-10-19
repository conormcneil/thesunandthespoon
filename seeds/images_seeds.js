
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
        }),

        // Post 4
        knex('images').insert({
          id: 14,
          post_id: 4,
          title: "Banana Bread Granola 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475518699/banana_bread_granola_5_xjosio.jpg"
        }),
        knex('images').insert({
          id: 15,
          post_id: 4,
          title: "Banana Bread Granola 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475518699/banana_bread_granola_2_h5xnap.jpg"
        }),
        knex('images').insert({
          id: 16,
          post_id: 4,
          title: "Banana Bread Granola 3",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475518698/banana_bread_granola_3_sjiwfb.jpg"
        }),
        knex('images').insert({
          id: 17,
          post_id: 4,
          title: "Banana Bread Granola 4",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475518699/banana_bread_granola_4_dv9cm2.jpg"
        }),
        knex('images').insert({
          id: 18,
          post_id: 4,
          title: "Banana Bread Granola 5",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475518697/banana_bread_granola_1_xyg7rg.jpg"
        }),

        // Post 5
        knex('images').insert({
          id: 19,
          post_id: 5,
          title: "Blueberry Streusel Baked Oatmeal 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475548717/blueberry_oatmeal_1_zbes7u.jpg"
        }),
        knex('images').insert({
          id: 20,
          post_id: 5,
          title: "Blueberry Streusel Baked Oatmeal 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475548717/blueberry_oatmeal_2_cjajzx.jpg"
        }),

        // Post 6
        knex('images').insert({
          id: 21,
          post_id: 6,
          title: "Cinammon Rawnola 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605019/cinnamon_rawnola_1_dad3vk.jpg"
        }),
        knex('images').insert({
          id: 22,
          post_id: 6,
          title: "Cinammon Rawnola 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605019/cinnamon_rawnola_2_fho6hz.jpg"
        }),
        knex('images').insert({
          id: 23,
          post_id: 6,
          title: "Cinammon Rawnola 3",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605019/cinnamon_rawnola_3_shwv02.jpg"
        }),
        knex('images').insert({
          id: 24,
          post_id: 6,
          title: "Cinammon Rawnola 4",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605019/cinnamon_rawnola_4_uz5502.jpg"
        }),
        knex('images').insert({
          id: 25,
          post_id: 6,
          title: "Cinammon Rawnola 5",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605020/cinnamon_rawnola_5_dvzoa4.jpg"
        }),

        // Post 7
        knex('images').insert({
          id: 26,
          post_id: 7,
          title: "Sweet Chili BBQ Roasted Vegetables 1",
          url: "http://res.cloudinary.com/dmuipy77o/image/upload/v1475605649/bbq_roasted_vegetables_1_b3cavj.jpg"
        }),
        knex('images').insert({
          id: 27,
          post_id: 7,
          title: "Sweet Chili BBQ Roasted Vegetables 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605649/bbq_roasted_vegetables_2_rhsnyh.jpg"
        }),
        knex('images').insert({
          id: 28,
          post_id: 7,
          title: "Sweet Chili BBQ Roasted Vegetables 3",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605649/bbq_roasted_vegetables_3_ctogeu.jpg"
        }),
        knex('images').insert({
          id: 29,
          post_id: 7,
          title: "Sweet Chili BBQ Roasted Vegetables 4",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1475605648/bbq_roasted_vegetables_4_nmclgy.jpg"
        }),

        // Post 8
        knex('images').insert({
          id: 30,
          post_id: 8,
          title: "Spiced Toffee Mixed Nuts 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1476900725/spiced_toffee_mixed_nuts_1_sux6gs.jpg"
        }),
        knex('images').insert({
          id: 31,
          post_id: 8,
          title: "Spiced Toffee Mixed Nuts 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1476900726/spiced_toffee_mixed_nuts_2_a4nkqi.jpg"
        }),

        // Post 9
        knex('images').insert({
          id: 32,
          post_id: 9,
          title: "Vegan Pumpkin Spice Snickerdoodles 1",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1476901516/vegan_pumpkin_spice_snickerdoodles_1_xlktfn.jpg"
        }),
        knex('images').insert({
          id: 33,
          post_id: 9,
          title: "Vegan Pumpkin Spice Snickerdoodles 2",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1476901516/vegan_pumpkin_spice_snickerdoodles_2_okzmzm.jpg"
        }),
        knex('images').insert({
          id: 34,
          post_id: 9,
          title: "Vegan Pumpkin Spice Snickerdoodles 3",
          url: "https://res.cloudinary.com/dmuipy77o/image/upload/v1476901516/vegan_pumpkin_spice_snickerdoodles_3_hs06um.jpg"
        })



      ]);
    });
};
