var id = 14; // int
var title = 'Farmer\'s Market Orzo Salad'; // string
var date = Date.now();
var category_id = 1; // int

// new-line separated paragraphs
var body = 'Ahh the Farmers\’ Market. The place where all of my dreams about fresh produce, vegan baked goods, and rare coffee beans come true. The Farmers’ Market truly inspires me to eat locally, to eat plants, and to get creative.\nThis orzo salad is filled with many of the vegetables found there at this time of the year. Ripened tomatoes, tender squash, and sweet bell peppers perfectly complement wholesome and nutty orzo. As if that isn’t good enough, it’s all tossed in a roasted garlic vinaigrette.\nSo how do you make this Farmers’ Market-inspired salad, which also happens to be perfect for lunch, dinner, leftovers, picnics, parties, and pretty much everything? It’s simple!\nFirst, put your chopped zucchini, bell pepper, tomatoes, and garlic cloves on a baking sheet. Toss them with olive oil, salt, pepper, dried oregano, and red pepper flakes.\nThen, put them in the oven for about 35 minutes, or until they are roasted to perfection. While the veggies are roasting, cook the orzo according the the directions on the package.\nThen, use the roasted garlic to make the vinaigrette.\nOnce you have all of these components, you’ll be ready to assemble the salad!\nDish it up to your heart’s content.\nAnd enjoy!'
// new-line-separated ingredients
var ingredients = '2 Zucchini squash\n1 Red bell pepper\n1 Cup cherry tomatoes\n1 Tablespoon extra virgin olive oil\n¼ teaspoon sea salt\nFreshly ground pepper\n½ Teaspoon dried oregano\n2 Teaspoons red pepper flakes\n1 12-oz package whole wheat orzo\nFor the vinaigrette:\n3 Cloves roasted garlic\n2 Tablespoons Extra Virgin Olive oil\n2 Tablespoons water\n2 Tablespoons balsamic vinegar\n1 Tablespoon white balsamic vinegar\n1 Teaspoon agave nectar\n¼ Teaspoon sea salt\nGround pepper'
// colon-separated string of instructions
var instructions = 'Preheat the oven to 375 degrees fahrenheit.\nSlice the two zucchini in half lengthwise, then slice them into half-circles about ¼" thick.\nDice the bell pepper into ½" squares\nPlace sliced zucchini, diced bell pepper, and tomatoes onto a baking sheet. Toss them with one tablespoon of olive oil, sea salt, pepper, oregano, and ½ teaspoon red pepper flakes and toss until all of the vegetables are evenly coated.\nAdd 3 cloves of unpeeled garlic to the baking dish.\nRoast the vegetables and garlic for 15 minutes.\nToss the veggies and roast them for 20 minutes more, or until they are a golden brown.\nWhile the vegetables are roasting, fill a large pot with water and bring the water to a boil.\nAdd the orzo and cook it according to the directions on the package.\nCarefully peel the roasted garlic.\nAdd the peeled garlic, two tablespoons extra virgin olive oil, water, both the balsamic and white balsamic vinegar, agave, sea salt, and ground pepper to a blender or food processor and blend until smooth.\nAdd the orzo, roasted vegetables, and vinaigrette to a large bowl and toss until everything is combined.'

function makeSeed(id,title,date,category_id,body,ingredients,instructions) {
  body = '<p>' + body.replace(/\n/g,'</p><p>') + '</p>'

  ingredients = '<ul><li>' + ingredients.replace(/\n/g,'</li><li>') + '</li></ul>'

  instructions = '<ol><li>' + instructions.replace(/\n/g,'</li><li>') + '</li></ol>'

  return `knex('posts').insert({id:${id},title:"${title}",date:${date},category_id:${category_id},body:"${body}",ingredients:"${ingredients}",instructions:"${instructions}"})`;
}

console.log(makeSeed(id,title,date,category_id,body,ingredients,instructions));
