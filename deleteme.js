// new-line separated paragraphs
var body = 'I think the world is trying to tell me something. And by “something,” I mean the world is trying to tell me that I need to have a wonderful, grassy, beautiful farm full of cute furry dogs that will kiss, snuggle, and play with me all day long. This blunt message, or course, was inferred by the fact that within the past few days I have found (and safely returned) two lost dogs. They flock to me. Or, um, I flock to them. Basically, I’m obsessed with dogs and am looking for any reason whatsoever to have as many of them as possible. Okay, world?\nWhen the universe isn’t bestowing me with sweet puppies, I’m hanging out in the kitchen figuring out ways to eat banana bread in a million different ways. Banana bread mini muffins? Check. Banana bread milkshake? Check. Banana Bread Granola that makes for perfect breakfast, hiking fuel, snacks, and dessert? CHECK.\nSometime last year I discovered some local banana bread granola at my favorite Whole Foods in Tucson. Talk about love at first bite. It was soft, sticky-sweet, and perfectly nutty, just like my favorite banana bread. Now that I’m in Colorado and can’t get my hands on the good stuff, I figured it was time to recreate the recipe at home.\nSo I headed into the kitchen, mixed some stuff up in a bowl, poured it all out onto a baking sheet, and baked it for 30 minutes. And you know what I got? Straight up Banana Bread Granola. It’s spiced with a warm combination of cinnamon, ginger, nutmeg, and cloves and clumped together with the perfect combination of ripe banana, brown rice syrup, and coconut oil. Wholesome walnuts add a crunchy nuttiness to the whole thing and ohmygosh it’s just so good. Like, so-good-I-can’t-stop-going-to-the-pantry-to-grab-a-handful-every-few-minutes good.\nSo next time you have a ripe banana on hand, use it to make this banana bread granola. Then spend the next week day sneaking little bites until you find yourself wondering where it all went. And never look back.'
// new-line-separated ingredients
var ingredients = '1 really ripe banana\n½ cup coconut oil, melted\n½ cup brown rice syrup or maple syrup\n½ teaspoon pumpkin pie spice\n1 teaspoon vanilla\n4.5 cups rolled oats\n1 teaspoon salt\n1.5 cups chopped walnuts\n1.5 cups chopped dried bananas, optional'
// colon-separated string of instructions
var instructions = 'Heat the oven to 350 degrees.\nBlend banana, coconut oil, brown rice syrup, pumpkin pie spice, and vanilla in a blender until the mixture is smooth.\nPut oats, salt, and walnuts in a large mixing bowl and stir them together. Pour the blended wet ingredients into the bowl of dry ingredients and stir until everything is evenly combined.\nPour the mixture onto a baking sheet.\nBake the granola for 15 minutes.\nRemove the granola from the oven and stir it.\nBake the granola for another 15 minutes.\nAllow the granola to cool for one hour before breaking it up and storing it in an airtight container.'

function makeSeed(body,ingredients,instructions) {
  body = '<p>' + body.replace(/\n/g,'</p><p>') + '</p>'

  ingredients = '<ul><li>' + ingredients.replace(/\n/g,'</li><li>') + '</li></ul>'

  instructions = '<ol><li>' + instructions.replace(/\n/g,'</li><li>') + '</li></ol>'

  return [body,ingredients,instructions];
}

console.log(makeSeed(body,ingredients,instructions));
