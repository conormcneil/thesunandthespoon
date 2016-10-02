
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          title: 'Buddha Bowls',
          headline: 'These are great for post hike treats!',
          date: '1475441736566',
          body: '<p>Buddha bowl=the largest bowl you have+the most delicious veggies in your kitchen (bonus points if they’re roasted)+some protein+as many sauces as you have tucked away in the door of your fridge. Fall Buddha Bowl= baked sweet potatoes+colorful roasted potato wedges+sautéed leafy dark greens+crispy chickpeas+the creamiest of sauces+basil confetti. Buddha bowls are the new salads/dinners/lunches and here’s why: they’re everything you could ever want in a salad/dinner/lunch. Because they’re versatile, they’re the perfect canvas for leftovers, and they require all the sauces.</p><p>Life has been really tough lately. I’m living in beautiful Colorado (I know, you feel really sorry for me), but I miss my family/dogs/desert sunsets and the general content that comes with knowing that you’re home. If the past six months have taught me anything, it’s that home is not just a structure with four walls and a roof that keeps you warm in the winter and cool in the summer. Home is the place my puppies are snoring on the couch, the place I feel like a contributing member of my community, and the place that makes me swell with pride every time I think about it. And I haven’t had a place to call home in six months.</p><p>I’ve always been able to find a little bit of home in the kitchen. The smell of onions and garlic bubbling on the stove will always remind me of the comfort of my Nanny’s house, and freshly baked banana bread never fails to bring me back to my mom’s kitchen. And so in this time of yearning I find myself in the kitchen more than ever, if only to awaken these fond memories of home.</p><p>Making (and subsequently eating) this buddha bowl was so therapeutic. Maybe it was all the carbs, or the creamy sauces, or the smell of herbs and garlic that rose from the oven. Maybe it was the tender sweet potato, the slightly crispy purple potatoes, or all of the vitamins in those leafy dark greens. Maybe it’s all of that comfort that puts the buddha in buddha bowl.</p>',
          ingredients: "'1 large sweet potato, cut in half lengthwise', '10 baby potatoes, cut into wedges','1 can chickpeas, rinsed and dried','1 bunch dark leafy greens (I used broccoli greens), roughly chopped','1 clove garlic, minced','2 tablespoons olive oil, divided','1 teaspoon sea salt, divided','freshly ground pepper','¼ cup fresh basil, chopped','For the tahini sauce:','¼ cup tahini','2 cloves garlic, pressed','2 tablespoons lemon juice','3 tablespoons water','½ teaspoon finely ground sea salt','¼ teaspoon freshly ground pepper','For the Parsley Sauce:','¼ cup olive oil','¼ cup fresh lemon juice','½ cup fresh flat leaf parsley','1 jalapeño, halved and seeded','2 tablespoons tahini','1.5 teaspoons ground cumin','1 teaspoon maple syrup','1 clove garlic, peeled','¼ teaspoon sea salt'"
        })
      ]);
    });
};
