// new-line separated paragraphs
var body = 'Roasted vegetables are my favorite side dish.\nWhy?\nBecause they don’t hide beneath the glory of the main entrée. Roasted veggies are that side dish you leave on your plate until the last few bites because let’s be honest, they’re the best part of the meal.\nAnd while the classic roasted veggies with a little olive oil, salt, and pepper will never get old, sometimes you need to switch it up a little.\nBy switch it up I mean Sweet Chili BBQ Roasted Vegetables, which are a little different than the classic S&P version. I mean, they’re:\nSexier\nSpicier\nSweeter\nSaucier\nGOLDEN BROWN VEGGIES THAT ARE ROASTED TO PERFECTION AND DON’T EVEN NEED A MAIN (ENTREE) ‘CAUSE THEY’RE THAT GOOD ALL BY THEMSELVES.\nThey’re independent veggies.\nYou go, Sweet Chili BBQ Roasted Root Vegetables. You go.\nLately (and by lately I mean every day since I created this recipe) I’ve been eating these for lunch and serving them alongside salads and veggie burgers.\nPersonally, I can’t wait to serve them at my family’s Thanksgiving dinner. People are going load up on these tender potatoes, carrots, and brussel sprouts, assuming they’re the S&P version served at every other Thanksgiving dinner. Then, they’ll bite through the caramelized coating and into the tender roasted vegetable and realize that these roasted veggies are unlike any they’ve ever had before. And they might never go back.'
// new-line-separated ingredients
var ingredients = '1 cup brussel sprouts, halved\n1 medium sized sweet potato or yam, cut into 1” cubes\n4 small red potatoes, cut into 1” cubes\n2 large carrots, cut in half lengthwise then cut into 1” pieces\n2 tablespoons extra virgin olive oil\n2 tablespoons honey\n½ teaspoon sea salt\n½ teaspoon smoked paprika\n½ teaspoon garlic powder\n½ teaspoon ground cumin\n½ teaspoon chili powder\n½ teaspoon chipotle powder'
// colon-separated string of instructions
var instructions = 'Heat the oven to 375 degrees.\nLine a baking sheet with parchment paper.\nEvenly distribute the chopped vegetables onto the baking sheet.\nIn a small bowl, whisk together the olive oil, honey, sea salt, paprika, cumin, chili powder, and chipotle powder.\nPour the spice mixture over the vegetables and toss until it is evenly distributed.\nRoast the vegetables for 15 minutes.\nFlip the vegetables and continue roasting for 20-25 minutes, or until they are tender.\nPlace the tray of veggies under a broiler for 1-2 minutes for extra crispy edges.'

function makeSeed(body,ingredients,instructions) {
  body = '<p>' + body.replace(/\n/g,'</p><p>') + '</p>'

  ingredients = '<ul><li>' + ingredients.replace(/\n/g,'</li><li>') + '</li></ul>'

  instructions = '<ol><li>' + instructions.replace(/\n/g,'</li><li>') + '</li></ol>'

  return {body,ingredients,instructions};
}

console.log(makeSeed(body,ingredients,instructions));
