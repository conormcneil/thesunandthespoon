var id = 11; // int
var title = 'New Potato and Asparagus Salad'; // string
var date = Date.now();
var category_id = 2; // int

// new-line separated paragraphs
var body = 'Remember this Red Potato and Green Bean Salad with Rosemary Vinaigrette I made last year? Well I totally revamped it for Edible Baja Arizona’s blog by roasting the potatoes rather than boiling them, replacing the green beans with asparagus, and using a champagne vinaigrette. Maybe it’s an entirely new recipe? Check out the content for this recipe on EBA’s blog and find the recipe below!'
// new-line-separated ingredients
var ingredients = '1.5lbs New Potatoes, Halved\n1 Tablespoon Extra Virgin Olive Oil\n½ Teaspoon Coarse Sea Salt\n1 Bunch of Asparagus, Trimmed and Cut Into 1.5” Pieces\n¼ Cup Chives, Minced\n¼ Cup Italian Parsley, Minced\nVinaigrette:\n1 Teaspoon Dijon Mustard\n3 Tablespoons Champagne Vinegar\n¼ Teaspoon Sea Salt\n¼ Teaspoon Freshly Ground Pepper\n3 Tablespoons Extra Virgin Olive Oil'
// colon-separated string of instructions
var instructions = 'To make the Vinaigrette:\nIn a small bowl, whisk together Dijon mustard, champagne vinegar, sea salt, and pepper.\nAs you continue to whisk the mixture, slowly add the olive oil until the dressing is emulsified.\nPreheat the oven to 400 degrees Fahrenheit.\nOn a baking sheet, toss new potatoes with 1 tablespoon of extra virgin olive oil and ½ teaspoon of seal salt.\nRoast the potatoes for 20 minutes.\nToss the potatoes and roast for another 20 minutes, or until they are slightly browned and tender.\nMeanwhile, place a pot of water over high heat until the water boils.\nAdd the asparagus to the boiling water for 2 minutes.\nDrain immediately.\nLet the potatoes and asparagus cool to room temperature.\nIn a large bowl toss potatoes, asparagus, dressing and herbs.\nLet the potato salad sit for about 20 minutes in order for the vegetables to absorb the flavors.\nServe immediately or store in the fridge.'

function makeSeed(id,title,date,category_id,body,ingredients,instructions) {
  body = '<p>' + body.replace(/\n/g,'</p><p>') + '</p>'

  ingredients = '<ul><li>' + ingredients.replace(/\n/g,'</li><li>') + '</li></ul>'

  instructions = '<ol><li>' + instructions.replace(/\n/g,'</li><li>') + '</li></ol>'

  return `knex('posts').insert({id:${id},title:'${title}',date:${date},category_id:${category_id},body:'${body}',ingredients:'${ingredients}',instructions:'${instructions}'})`;
}

console.log(makeSeed(id,title,date,category_id,body,ingredients,instructions));
