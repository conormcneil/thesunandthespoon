var id = 12; // int
var title = 'Roasted Sweet Potato and Cauliflower Tacos with Pickled Beets and Avocado Crema'; // string
var date = Date.now();
var category_id = 1; // int

// new-line separated paragraphs
var body = 'Do you subscribe to your local CSA? I’ve been working with Edible Baja Arizona, an awesome local Tucson magazine, to bring Tucsonans recipes featuring produce from the Tucson CSA weekly harvest.\nI highly recommend checking out EBA’s magazine and blog, but I’m also going to put the recipes that I write for them in The Sun and The Spoon’s archive so that they’re easy to track down.\nYou can find the content for these Roasted Sweet Potato and Cauliflower Tacos with Pickled Beets and Avocado Crema here and the recipe for them below!'
// new-line-separated ingredients
var ingredients = 'Spicy Pickled Beets:\n-2/3 Cup Rice Vinegar\n-2 Tablespoons Honey\n-1/4 Cup Water\n-1 Tablespoon Grated Fresh Ginger\n-1 Tablespoon Fresh Lemon Juice\n-1 Cup Purple Cabbage, Finely Shredded\n-2 Medium Jalapeños, Thinly Sliced\n-1-2 Red Beets, Thinly Sliced and Chopped\nTacos:\n-8 Small Tortillas\n-1 Medium Sweet Potato, cut into ½ inch cubes\n-1/2 Small Head of Cauliflower, broken into small florets\n-1-2 Tablespoons Extra Virgin Olive Oil\n-1/2 Teaspoon Sea Salt\n-1/4 Teaspoon Freshly Cracked Pepper\nAvocado Crema:\n-1/2 Large Avocado\n-2 Ounces Goat Cheese\n-Pinch of Sea Salt'
// colon-separated string of instructions
var instructions = 'In a large bowl, whisk vinegar, honey, water, ginger, and lemon juice.\nAdd cabbage, jalapeños, and beets to the vinegar mixture and toss to combine.\nCover the bowl with plastic wrap and place in the fridge for at least one hour.\nUp to 2 days (but at least one hour) before making the tacos, prepare the spicy pickled beets.\nPreheat the oven to 400 degrees Fahrenheit.\nOn a large baking sheet, toss your cubed sweet potatoes and cauliflower florets with 1-2 tablespoons of olive oil, ½ teaspoon of sea salt, and ¼ teaspoon of pepper.\nRoast the sweet potato/cauliflower mixture for 10 minutes.\nFlip the mixture and roast for another 10 minutes.\nWhile the sweet potatoes and cauliflower are roasting, make the avocado crema.\nAdd the avocado, goat cheese, and a pinch of salt to a medium-sized bowl.\nWith a fork, mash and then whip the avocado and goat cheese together until the mixture is light and creamy.\nTop each tortilla with about 2-3 tablespoons of the sweet potatoes and cauliflower mixture, 2 tablespoons of the pickled beet mixture, and 1 tablespoon of the avocado crema.\nEnjoy!'

function makeSeed(id,title,date,category_id,body,ingredients,instructions) {
  body = '<p>' + body.replace(/\n/g,'</p><p>') + '</p>'

  ingredients = '<ul><li>' + ingredients.replace(/\n/g,'</li><li>') + '</li></ul>'

  instructions = '<ol><li>' + instructions.replace(/\n/g,'</li><li>') + '</li></ol>'

  return `knex('posts').insert({id:${id},title:'${title}',date:${date},category_id:${category_id},body:'${body}',ingredients:'${ingredients}',instructions:'${instructions}'})`;
}

console.log(makeSeed(id,title,date,category_id,body,ingredients,instructions));
