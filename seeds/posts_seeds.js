
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          title: 'Buddha Bowls',
          // headline: 'These are great for post hike treats!',
          date: '1474321736566',
          category_id: 1,
          body: '<p>Buddha bowl=the largest bowl you have+the most delicious veggies in your kitchen (bonus points if they’re roasted)+some protein+as many sauces as you have tucked away in the door of your fridge. Fall Buddha Bowl= baked sweet potatoes+colorful roasted potato wedges+sautéed leafy dark greens+crispy chickpeas+the creamiest of sauces+basil confetti. Buddha bowls are the new salads/dinners/lunches and here’s why: they’re everything you could ever want in a salad/dinner/lunch. Because they’re versatile, they’re the perfect canvas for leftovers, and they require all the sauces.</p><p>Life has been really tough lately. I’m living in beautiful Colorado (I know, you feel really sorry for me), but I miss my family/dogs/desert sunsets and the general content that comes with knowing that you’re home. If the past six months have taught me anything, it’s that home is not just a structure with four walls and a roof that keeps you warm in the winter and cool in the summer. Home is the place my puppies are snoring on the couch, the place I feel like a contributing member of my community, and the place that makes me swell with pride every time I think about it. And I haven’t had a place to call home in six months.</p><p>I’ve always been able to find a little bit of home in the kitchen. The smell of onions and garlic bubbling on the stove will always remind me of the comfort of my Nanny’s house, and freshly baked banana bread never fails to bring me back to my mom’s kitchen. And so in this time of yearning I find myself in the kitchen more than ever, if only to awaken these fond memories of home.</p><p>Making (and subsequently eating) this buddha bowl was so therapeutic. Maybe it was all the carbs, or the creamy sauces, or the smell of herbs and garlic that rose from the oven. Maybe it was the tender sweet potato, the slightly crispy purple potatoes, or all of the vitamins in those leafy dark greens. Maybe it’s all of that comfort that puts the buddha in buddha bowl.</p>',
          ingredients: "<ul><li>1 large sweet potato, cut in half lengthwise</li><li>10 baby potatoes, cut into wedges</li><li>1 can chickpeas, rinsed and dried</li><li>1 bunch dark leafy greens (I used broccoli greens), roughly chopped</li><li>1 clove garlic, minced</li><li>2 tablespoons olive oil, divided</li><li>1 teaspoon sea salt, divided</li><li>freshly ground pepper</li><li>¼ cup fresh basil, chopped</li><li>For the tahini sauce:</li><li>¼ cup tahini</li><li>2 cloves garlic, pressed</li><li>2 tablespoons lemon juice</li><li>3 tablespoons water</li><li>½ teaspoon finely ground sea salt</li><li>¼ teaspoon freshly ground pepper</li><li>For the Parsley Sauce:</li><li>¼ cup olive oil</li><li>¼ cup fresh lemon juice</li><li>½ cup fresh flat leaf parsley</li><li>1 jalapeño, halved and seeded</li><li>2 tablespoons tahini</li><li>1.5 teaspoons ground cumin</li><li>1 teaspoon maple syrup</li><li>1 clove garlic, peeled</li><li>¼ teaspoon sea salt</li></ul>",
          instructions: "<ol><li>Heat the oven to 400 degrees.</li><li>Place both haves of the sweet potato and all of the potato wedges on a baking tray.</li><li>Drizzle one tablespoon of olive oil, ½ teaspoon sea salt, and freshly ground pepper on the potatoes. Toss to combine.</li><li>Place the chickpeas on a second baking tray. Drizzle ½ tablespoon olive oil, ¼ teaspoon sea salt, and freshly ground pepper over the chickpeas. Toss to combine.</li><li>Roast the potatoes and chickpeas in the same oven for 17 minutes. Remove the chickpeas from the oven.</li><li>Toss the potato wedges. Continue cooking the potato wedges and sweet potato halves for another 15-20 minutes, or until wedges are slightly crispy and sweet potatoes are tender. Remove from the oven.</li><li>While the potatoes and chickpeas are roasting, heat remaining ½ tablespoon olive oil in a small skillet over low-medium heat. Add the minced garlic and sauté for 30 seconds. Add the leafy greens, ¼ teaspoon sea salt, and freshly ground pepper. Cook for 1-2 minutes, or until the greens are slightly wilted. Remove from the heat.</li><li>Once the greens have been cooked, make the sauces.</li><li>To make the tahini sauce, Add tahini, garlic cloves, lemon juice, water, sea salt, and pepper to a bowl. Whisk vigorously until all ingredients are combined and the sauce is smooth and creamy.</li><li>To make the parsley sauce:</li><li>Add olive oil, lemon juice, parsley, jalapeño, tahini, cumin, maple syrup, garlic clove, and sea salt to a blender. Blend the ingredients for about one minute, or until the ingredients are well combined.</li><li>Dice the sweet potato halves into one inch cubes. Divide the diced sweet potatoes, potato wedges, leafy greens, and chickpeas into two bowls. Drizzle each bowl with as much tahini and parsley sauce as you want. Sprinkle each bowl with freshly chopped basil.</li></ol>"
        }),
        knex('posts').insert({
          id: 2,
          title: 'My Favorite Acai Bowl',
          // headline: 'WARNING: This will make your mouth red!',
          date: '1473311736566',
          category_id: 3,
          body: '<p>WARNING: My favorite acai bowl WILL turn your lips red. But, it’s a pretty shade of red and tastes considerably better than lipstick, so you really don’t have anything to worry about.</p><p>My acai bowl awakening came in the summer of 2013, when I took a trip to Maui, Hawaii. I loved snorkeling with sea turtles and watching purple-y orange sunsets, but I will never forget the raw vegan cafe, Choice, that I ate at almost every day. Before this trip, I thought that a raw vegan diet consisted of a bunch of carrots and cucumbers. Which are great, but…boring. Choice completely blew my mind. I ate raw vegan ravioli, raw vegan brownies, and raw vegan pizza. And then, on a beautiful warm morning, I tried one of the acai bowls at Choice. A mountainous, thick, deep purple smoothie was served in a bowl. A smoothie in a bowl! Topped with sliced strawberries, bananas, goji berries, shredded coconut, cacao nibs, and bee pollen, it remains the most glorious thing I have ever seen. And I’ve been to the Grand Canyon.</p><p>Needless to say, I was in deep withdrawal when I returned home to Arizona at the end of the trip. I scoured every smoothie shop around, but never found an acai bowl that compared to the one at Choice. So, I returned to the kitchen to create my own. I had some failures (I do not recommend putting dried figs on your acai bowl). But eventually, with the discovery of Sambazon Acai juice, I was able to create an incredible acai bowl at home.</p><p>This acai bowl isn’t just a weak substitute for the good stuff. It is the good stuff. It’s a rich, creamy smoothie bowl filled with frozen fruit, chia seeds, greens, and acai juice. It’s toppings such as sliced bananas, berries, nuts, coconut, and chocolate, but not dried figs. It’s breakfast. It’s lunch. It’s dessert. And best of all, it’s not ten dollars.</p>',
          ingredients: "<ul><li>⅓ cup frozen mango pieces</li><li>1 cup frozen peach slices</li><li>½ cup frozen blueberries</li><li>½ ripe banana</li><li>½ cup kale or spinach (optional)</li><li>1 tablespoon chia seeds</li><li>¼ cup original acai juice, such as Sambazon</li><li>Optional Toppings:</li><li>sliced bananas</li><li>berries</li><li>shredded coconut</li><li>cacao nibs</li><li>bee pollen</li><li>raw honey</li><li>goji berries</li><li>nuts</li></ul>",
          instructions: "<ol><li>Place mangoes, peaches, blueberries, banana, greens, chia seeds, and acai juice in a high speed blender or food processor.</li><li>Blend the ingredients until they create a thick and creamy smoothie.</li><li>Spoon the smoothie into a bowl.</li><li>Top the smoothie with your toppings of choice.</li></ol>"
        }),
        knex('posts').insert({
          id: 3,
          title: 'Peachy Keen Cheesecake',
          // headline: 'It\'s just peachy!',
          date: '1472000736566',
          category_id: 3,
          body: '<p>This was supposed to be a vegan caramel cheesecake. Things with the vegan caramel cheesecake took a turn for the worse when I burnt the vegan caramel and made the house smell so bad that I had to burn three sticks of incense to make it bearable to be inside. So. When you can’t figure out vegan caramel cheesecake, it’s Peachy Keen Cheesecake to the rescue. Because local in-season peaches make everything okay.</p><p>You’ve had local in-season peaches, right? They’re soft, and juicy, and slightly tart, and they fall right off the pit. They basically beg you to eat them, calling out to you from their heaping fruit bowl on the kitchen counter. I dare you to resist their call.</p><p>You can’t go wrong eating seasonal peaches as they are. You can’t go wrong smothering them with a scoop of sweet, creamy, vanilla ice cream. You especially can’t go wrong simmering them into a sweet, thick preserve and swirling them through a cashew-based vegan cheesecake.</p><p>Yup, vegan cashew-based cheesecake. With a date-oat-walnut crust and a creamy, non-dairy filling. Without any processed sugars or need for baking. Isn’t life sweet?</p><p>A house that smells like burnt caramel isn’t so bad when the result is a Peachy Keen Cheesecake.</p>',
          ingredients: '<ul><li>3 peaches, chopped into ½" pieces</li><li>¼ cup water</li><li>1 T maple syrup, honey, or brown rice syrup</li><li>1 cup oats, toasted</li><li>½ cup walnuts, toasted</li><li>¼ teaspoon sea salt</li><li>½ teaspoon pumpkin pie spice</li><li>1.25 cups pitted Medjool dates</li><li>1.5 cups raw soaked cashews</li><li>2 T fresh lemon juice</li><li>1 teaspoon vanilla extract</li><li>¼ cup coconut oil, melted</li><li>½ cup full fat coconut milk</li><li>⅓ cup brown rice syrup or maple syrup</li></ul>',
          instructions: '<ol><li>Place cashews in a medium-sized bowl. Pour three cups of boiling water over the cashews and allow them to soak for an hour.</li><li>Combine chopped peaches, water, and maple syrup in a small saucepan over medium-low heat. Allow the mixture to simmer for 15-20 minutes until the mixture has thickened. Remove from heat and allow to cool.</li><li>Place oats, walnuts, sea salt, pumpkin pie spice, and Medjool dates in a food processor. Pulse the ingredients together until they are fine. Press the mixture into the bottom of a 9-inch cake pan or spring form pan.</li><li>Drain the cashews and add them to a high-speed blender with the lemon juice, vanilla, coconut oil, coconut milk, and brown rice syrup. Blend the mixture until it is smooth and creamy. Pour the mixture into the cake pan over the prepared crust.</li><li>Spoon the cooked peaches over the cheesecake filling. Use a knife to gently swirl the peaches through the filling.</li><li>Freeze the cheesecake for at least 4 hours. Remove the cheesecake from the freezer 20 minutes before serving.</li><li>Store in the freezer.</li></ol>'
        }),
        knex('posts').insert({
          id: 4,
          title: 'Banana Bread Granola',
          // headline: 'Get some. It\s for breakfast.',
          date: '1472000735366',
          category_id: 4,
          body: '<p>I think the world is trying to tell me something. And by “something,” I mean the world is trying to tell me that I need to have a wonderful, grassy, beautiful farm full of cute furry dogs that will kiss, snuggle, and play with me all day long. This blunt message, or course, was inferred by the fact that within the past few days I have found (and safely returned) two lost dogs. They flock to me. Or, um, I flock to them. Basically, I’m obsessed with dogs and am looking for any reason whatsoever to have as many of them as possible. Okay, world?</p><p>When the universe isn’t bestowing me with sweet puppies, I’m hanging out in the kitchen figuring out ways to eat banana bread in a million different ways. Banana bread mini muffins? Check. Banana bread milkshake? Check. Banana Bread Granola that makes for perfect breakfast, hiking fuel, snacks, and dessert? CHECK.</p><p>Sometime last year I discovered some local banana bread granola at my favorite Whole Foods in Tucson. Talk about love at first bite. It was soft, sticky-sweet, and perfectly nutty, just like my favorite banana bread. Now that I’m in Colorado and can’t get my hands on the good stuff, I figured it was time to recreate the recipe at home.</p><p>So I headed into the kitchen, mixed some stuff up in a bowl, poured it all out onto a baking sheet, and baked it for 30 minutes. And you know what I got? Straight up Banana Bread Granola. It’s spiced with a warm combination of cinnamon, ginger, nutmeg, and cloves and clumped together with the perfect combination of ripe banana, brown rice syrup, and coconut oil. Wholesome walnuts add a crunchy nuttiness to the whole thing and ohmygosh it’s just so good. Like, so-good-I-can’t-stop-going-to-the-pantry-to-grab-a-handful-every-few-minutes good.</p><p>So next time you have a ripe banana on hand, use it to make this banana bread granola. Then spend the next week day sneaking little bites until you find yourself wondering where it all went. And never look back.</p>',
          ingredients: '<ul><li>1 really ripe banana</li><li>½ cup coconut oil, melted</li><li>½ cup brown rice syrup or maple syrup</li><li>½ teaspoon pumpkin pie spice</li><li>1 teaspoon vanilla</li><li>4.5 cups rolled oats</li><li>1 teaspoon salt</li><li>1.5 cups chopped walnuts</li><li>1.5 cups chopped dried bananas, optional</li></ul>',
          instructions: '<ol><li>Heat the oven to 350 degrees.</li><li>Blend banana, coconut oil, brown rice syrup, pumpkin pie spice, and vanilla in a blender until the mixture is smooth.</li><li>Put oats, salt, and walnuts in a large mixing bowl and stir them together. Pour the blended wet ingredients into the bowl of dry ingredients and stir until everything is evenly combined.</li><li>Pour the mixture onto a baking sheet.</li><li>Bake the granola for 15 minutes.</li><li>Remove the granola from the oven and stir it.</li><li>Bake the granola for another 15 minutes.</li><li>Allow the granola to cool for one hour before breaking it up and storing it in an airtight container.</li></ol>'
        }),
        knex('posts').insert({
          id: 5,
          title: 'Blueberry Streusel Baked Oatmeal',
          // headline: 'Get some. It\s for breakfast.',
          date: '1472000735366',
          category_id: 3,
          body: '<p>From Reese’s Puffs to sugary granola bars, there are plenty of breakfast foods that double as dessert. Although these supermarket finds are fortified with vitamins and apparently packed with whole grains, there aren’t many unprocessed ingredients to be found within their packaging. Taking breakfast into our own hands allows us to control how much (and what kinds) of grains, sugar, and whole foods we eat. When those wholesome and healthy ingredients add up to be something as wonderful as breakfast that tastes like dessert, it’s hard to justify picking up a box of sugary cereal the next time you’re passing through the cereal aisle.</p><p>This Blueberry Streusel Baked Oatmeal is everything you could ever want in a dessert breakfast. It’s hearty, energizing, warm, and most importantly IT TASTES AMAZING. Creamy oatmeal is topped with sweet, juicy blueberries that have been cooked over the stove and reduced to a preserve-like consistency. As if that wasn’t enough, the oatmeal is liberally sprinkled with a crunchy, nutty, sweet streusel and baked to perfection. Once baked, scooped onto a spoon and put into your mouth, this blueberry streusel baked oatmeal will remind you of the most wonderful blueberry coffee cake ever. And after dinner, when you’re craving something sweet and satisfying, you can warm up a slice of blueberry streusel baked oatmeal, top it off with a big scoop of creamy vanilla ice cream, and thank yourself for making a recipe that can be eaten for the two most important meals of the day.</p><p>And yes, dessert is one of the two most important meals of the day.</p>',
          ingredients: '<ul><li>¼ cup filtered water</li><li>2 tablespoons raw honey</li><li>1 teaspoon vanilla extract</li><li>2 cups blueberries (fresh or frozen)</li><li>2 and ¼ cup rolled oats</li><li>1 teaspoon baking powder</li><li>½ teaspoon sea salt</li><li>1 large ripe mashed banana</li><li>3 tablespoons maple syrup</li><li>2 cups unsweetened vanilla almond milk</li><li>2 teaspoons vanilla extract</li><li>1 cup oat flour</li><li>2 tablespoons brown sugar</li><li>1 tablespoon cane sugar</li><li>1 teaspoon baking powder</li><li>1 teaspoon ground cinnamon</li><li>pinch of salt</li><li>3 tablespoons coconut oil</li><li>¼ cup chopped walnuts</li></ul>',
          instructions: '<ol><li>Preheat the oven to 375 degrees.</li><li>In a small pan, mix water, honey, 1 teaspoon of vanilla extract, and blueberries.</li><li>Place the pan on the stove over medium heat until the mixture comes to a boil.</li><li>Reduce the temperature to low and simmer the blueberry mixture for about 20 minutes, or until it is thick but still juicy.</li><li>While the blueberries are cooking, combine oats, baking powder, and ½ teaspoon sea salt in a large mixing bowl.</li><li>Add mashed banana, maple syrup, almond milk, and 2 teaspoons vanilla extract and stir the contents of the bowl until everything is evenly combined.</li><li>Pour the mixture into a lightly greased 9x13 glass baking pan.</li><li>Top the oatmeal with dollups of the cooked blueberries and swirl the blueberries throughout the oatmeal using a butter knife.</li><li>In the bowl of a food processor, pulse oat flour, brown sugar, cane sugar, baking powder, cinnamon, a pinch of salt, coconut oil, and chopped walnuts a few times until everything is evenly distributed.</li><li>Evenly sprinkle the streusel over the pan of oatmeal/blueberries.</li><li>Bake for 30-40 minutes, or until the oatmeal is firm and the streusel is golden brown.</li></ol>'
        }),
        knex('posts').insert({
          id: 6,
          title: 'Cinammon Rawnola',
          // headline: 'Is rawnola actually a thing?',
          date: '1471000735366',
          category_id: 3,
          body: '<p>Is rawnola actually a thing? Or should I have named this crunchy, healthy, sweet, protein-packed stuff Raw Cinnamon Granola, or perhaps Cinnamon Raw Granola? Such are the problems recipe creators face on a daily basis. In an effort to keep the name of this short, simple, and cutesy, I’m sticking with Cinnamon Rawnola.</p><p>And who really cares what this stuff is called, because it’s so damn delicious you’ll want to put it on everything. I’m serious. In the past week I’ve eaten Cinnamon Rawnola on smoothie bowls, vegan ice cream sundaes, oatmeal, and straight off of a really big spoon. My favorite way to eat Cinnamon Rawnola is in a parfait between layers of cinnamon banana nice cream.</p><p>What is Cinnamon Rawnola? It’s a combination of three different types of (raw) nuts, medjool dates, coconut, cinnamon, and coconut oil. It’s pulsed in your food processor until it reaches the perfect balance between crunchy and sprinkle-able. That’s right, sprinkle-able. I’m coming up with all kinds of new words these days.</p><p>It’s kind of perfect. I mean, how often do you find a granola recipe without any added sugar? Cinnamon Rawnola doesn’t require any baking, and comes together in less than 5 minutes, making it perfect for a quick breakfast or smoothie bowl topping.</p>',
          ingredients: '<ul><li>¼ cup raw almonds</li><li>¼ cup raw hazelnuts</li><li>¼ cup raw walnuts</li><li>heaping ¼ cup medjool dates, pitted</li><li>1 tablespoon shredded unsweetened coconut</li><li>1 teaspoon chia seeds</li><li>1 teaspoon hemp hearts</li><li>1 tablespoon melted coconut oil</li></ul>',
          instructions: '<ol><li>Add all ingredients to a food processor.</li><li>Pulse the ingredients until the ingredients are combined and the nuts are mostly chopped.</li></ol>'
        }),
        knex('posts').insert({
          id: 7,
          title: 'Sweet Chili BBQ Roasted Vegetables',
          // headline: 'What\'s better than roasted vegetables? Sweet chili BBQ roasted vegetables.',
          date: '1470000735366',
          category_id: 2,
          body: '<p>Roasted vegetables are my favorite side dish.</p><p>Why?</p><p>Because they don’t hide beneath the glory of the main entrée. Roasted veggies are that side dish you leave on your plate until the last few bites because let’s be honest, they’re the best part of the meal.</p><p>And while the classic roasted veggies with a little olive oil, salt, and pepper will never get old, sometimes you need to switch it up a little.</p><p>By switch it up I mean Sweet Chili BBQ Roasted Vegetables, which are a little different than the classic S&P version. I mean, they’re:</p><p>Sexier</p><p>Spicier</p><p>Sweeter</p><p>Saucier</p><p>GOLDEN BROWN VEGGIES THAT ARE ROASTED TO PERFECTION AND DON’T EVEN NEED A MAIN (ENTREE) ‘CAUSE THEY’RE THAT GOOD ALL BY THEMSELVES.</p><p>They’re independent veggies.</p><p>You go, Sweet Chili BBQ Roasted Root Vegetables. You go.</p><p>Lately (and by lately I mean every day since I created this recipe) I’ve been eating these for lunch and serving them alongside salads and veggie burgers.</p><p>Personally, I can’t wait to serve them at my family’s Thanksgiving dinner. People are going load up on these tender potatoes, carrots, and brussel sprouts, assuming they’re the S&P version served at every other Thanksgiving dinner. Then, they’ll bite through the caramelized coating and into the tender roasted vegetable and realize that these roasted veggies are unlike any they’ve ever had before. And they might never go back.</p>',
          ingredients: '<ul><li>1 cup brussel sprouts, halved</li><li>1 medium sized sweet potato or yam, cut into 1” cubes</li><li>4 small red potatoes, cut into 1” cubes</li><li>2 large carrots, cut in half lengthwise then cut into 1” pieces</li><li>2 tablespoons extra virgin olive oil</li><li>2 tablespoons honey</li><li>½ teaspoon sea salt</li><li>½ teaspoon smoked paprika</li><li>½ teaspoon garlic powder</li><li>½ teaspoon ground cumin</li><li>½ teaspoon chili powder</li><li>½ teaspoon chipotle powder</li></ul>',
          instructions: '<ol><li>Heat the oven to 375 degrees.</li><li>Line a baking sheet with parchment paper.</li><li>Evenly distribute the chopped vegetables onto the baking sheet.</li><li>In a small bowl, whisk together the olive oil, honey, sea salt, paprika, cumin, chili powder, and chipotle powder.</li><li>Pour the spice mixture over the vegetables and toss until it is evenly distributed.</li><li>Roast the vegetables for 15 minutes.</li><li>Flip the vegetables and continue roasting for 20-25 minutes, or until they are tender.</li><li>Place the tray of veggies under a broiler for 1-2 minutes for extra crispy edges.</li></ol>'
        }),





        knex('posts').insert({
          id: 8,
          title: 'Spiced Toffee Mixed Nuts',
          // headline: '',
          date: '1470000735366',
          category_id: 3,
          body: '<p>The holidays are great. But they’re also super nutty.</p><p>Amongst the wonderful fuzzy feelings I have this time of year are thoughts like:</p><p>“I hope Aunt ____ and ____ don’t start talking about how much they like Donald Trump this Christmas,”</p><p>and</p><p>“Oh #*%!, I still need a gift for ____ but I just cancelled my Amazon Prime free trial because I’m not a student anymore,”</p><p>and</p><p>“If my boyfriend is still with me the day after my family’s Thanksgiving dinner I’m going to owe him a long and relaxing vacation to a remote tropical island.”</p><p>So how do you balance out the nuttiness of the holidays? With more nuts, of course. Spiced Toffee Mixed Nuts that are covered in a sweet, slightly sticky, and perfectly spiced batch of fresh toffee. Nuts that are roasted to perfectly toasted and crunchy perfection but that still remain buttery and rich. Nuts that are wholesomely sweetened and bring you much greater piece of mind than your cancelled Amazon Prime membership.</p><p>The original idea for these Spiced Toffee Mixed Nuts came from these Toffee Cinnamon Oatmeal Cookie Bars that I literally make ALL. THE. TIME. They are my go-to dessert and I crave them constantly. The first three ingredients for this recipe (flax egg+coconut oil+coconut sugar) create the most amazing, delicious, sticky, sweet gooey toffee when they are mixed together. Oh man. I’m not going to lie, I drizzle that stuff on banana nice cream and eat it straight out of my mixing bowl every time I make those cookie bars. And one day, as I was licking my spatula, I considered the almost endless possibilities for that toffee.</p><p>“I can put it on oatmeal!” I thought.</p><p>“I can stir it into muffins!” I squealed.</p><p>“Oh my god, I can pour it all over mixed nuts and bake them in the oven until my house smells like Christmas and Anthropologie and the good section of Target’s candle isle! And hopefully they’ll actually taste good, too!”</p><p>My mind was working very well that day.</p><p>And so, I present these Spiced Toffee Mixed Nuts to you. May they occupy your decorative holiday snack bowls and fill your house with nice smells and may they always be there to take your mind off the scary idea of Donald Trump 2016.</p>',
          ingredients: '<ul><li>1 cup raw pecans</li><li>1 cup raw almonds</li><li>1 cup raw walnuts</li><li>¼ cup melted coconut oil</li><li>½ cup coconut sugar</li><li>1 flax egg (1 tablespoon ground flax meal+2 tablespoons water)</li><li>¼ teaspoon sea salt</li><li>2 teaspoons ground cinnamon</li></ul>',
          instructions: '<ol><li>Preheat the oven to 350 degrees.</li><li>Make the flax egg by stirring the ground flax meal and water together in a small bowl.</li><li>In a medium-sized mixing bowl, beat the melted coconut oil and coconut sugar together with a whisk.</li><li>Add the flax egg, sea salt, and ground cinnamon to the bowl and continue to beat the mixture until it is smooth.</li><li>Add the raw nuts to the bowl and toss until they are evenly coated in the toffee mixture.</li><li>Line a baking sheet with parchment paper and pour the coated nuts onto the baking sheet in an even layer.</li><li>Roast the nuts for 15-20 minutes, until they are golden brown but not burnt.</li><li>Allow the nuts to cool for an hour before eating or storing them.</li></ol>'
        }),
        knex('posts').insert({
          id: 9,
          title: 'Vegan Pumpkin Spice Snickerdoodles',
          // headline: 'What\'s better than roasted vegetables? Sweet chili BBQ roasted vegetables.',
          date: '1470000735366',
          category_id: 3,
          body: '<p>Over the past few months, I’ve though a lot about what I want this blog to represent and what it might offer to other people. I was initially attracted to eating mostly plant-based foods for both ethical and health reasons. Staying away from meat and other animal products allowed me to forget about where those products were coming from (and how those animals were treated) and make me feel as if I was contributing to the greater good by not supporting industrial factory farms with my money. Eating mostly plant-based meals still makes me feel the best. There’s nothing like the feeling of ending my day full of nutritious greens, legumes, whole grains, and fruit.</p><p>However, as I explored and learned more about my local food community over the past year, I found that many of my local ranchers and farmers are producing meat, cheese, and milk in a way that is healthy, humane, and sustainable. The ranches around me keep their cows, chickens, and and lambs on an expansive pasture, where they spend each day grazing on chemical-free grass. They are treated as any being should be: with kindness and respect. My local dairy farm knows that the key to their success is taking proper care of their cows, an ideal I align so closely with. They package their milk in glass bottles that can be refunded for $2, so that they can reuse them. And the beautiful ladies from my local goat cheese farm (goat cheese=life) have told me that their goats live more lavish lives than most people.</p><p>And so, while most of my farmer’s market money still ends up in the pockets of local, organic produce farmers, I feel happy to buy a log of goat cheese, a cut of grass-fed beef, and a gallon of whole milk whenever I want to. People aren’t going to stop eating meat or animal products. But, if given the chance to see the impact that supporting humane, local farms can have on animals, the environment, and their local communities, they might be persuaded to support these farms over companies such as Tyson, National Beef, and Cargill.</p><p>As I turn my focus to knowing where my food comes from and how it (and the people that produce it) is treated, you might see changes on The Sun and The Spoon. While I won’t be posting recipes for pot roast any time soon, I will be posting more seasonal recipes (and some might even have a little goat cheese thrown in). Part of my goal in doing this is to encourage others to seek out what their local farms have to offer. If you don’t live in Central or Southern Arizona, I would be happy to help you track down your own farmer’s market as well as your local goat farm.</p><p>So now that you known how much I love goat cheese (and the goats it comes from) I can profess my love for these super-duper Vegan Pumpkin Spice Snickerdoodles, which are by far the some of the best vegan cookies I’ve ever made. Why? Because not only are they wholesome Vegan Pumpkin Spice Snickerdoodles (100% whole wheat, coconut oil, PUMPKIN), they are soft, moist, sweet, straight up delicious cookies.</p><p>The biggest problem I’ve had developing vegan cookie recipes is getting the texture to be just right (a.k.a. not dense, not completely flat, not a rock hard ball of dried dough), but I think I’ve finally found the solution: almond milk (AND NO FLAX EGG). When I realized this, I was kind of mind-boggled. “No flax egg?!” I thought. It was an incredible realization for a girl who thought every vegan baked good needed an egg substitute. But anyways, it works. It creates the most perfect cookie dough that you just know is going to produce the best, most tender cookies once it’s been baked. YUM.</p><p>And guess what? I’ve come to realize that non-vegans need to bake vegan cookies once in awhile, too. Sometimes your friend’s vegan husband is coming over and you know how much he loves snickerdoodles, let alone pumpkin. Or your niece just had a baby who’s lactose intolerant and you want to send her some homemade cookies. Or you just want to prove to yourself that vegan cookies can taste as good as those ones your grandmas used to make. So pop a batch of these in the oven, because the dough literally takes 10 minutes to make, you only need one bowl, and everyone will love you even more than they already do.</p>',
          ingredients: '<ul><li>½ cup coconut oil, at room temperature</li><li>¼ cup cooked, pureed pumpkin</li><li>½ cup organic brown sugar</li><li>¼ cup cold, unsweetened almond milk</li><li>2 teaspoons vanilla extract</li><li>2 cups whole wheat pastry flour</li><li>2 teaspoons pumpkin pie spice</li><li>1 teaspoon baking soda</li><li>1 teaspoon baking powder</li><li>2 teaspoons cream of tartar</li><li>½ teaspoon salt</li><li>¼ cup organic cane sugar</li><li>2 teaspoons cinnamon</li></ul>',
          instructions: '<ol><li>Preheat the oven to 350 degrees.</li><li>In a mixing bowl, beat together the coconut oil and pureed pumpkin.</li><li>Once the mixture is smooth, add the brown sugar and beat it with a whisk for about 30 seconds, or until the mixture is smooth.</li><li>Add the cold almond milk and vanilla extract to the bowl and continue to beat for another 30 seconds. The temperature of the almond milk will cause the coconut oil to harden: this is okay!</li><li>Add flour, pumpkin pie spice, baking soda, baking powder, cream of tartar, and salt to the bowl. Mix the dough until everything is smooth and evenly combined.</li><li>In a small bowl, stir the cane sugar and cinnamon together.</li><li>Use a tablespoon to measure each ball of dough.</li><li>Roll each tablespoon of dough into a ball before rolling it in the bowl of cinnamon and sugar to cover the surface of the dough.</li><li>Place each ball of dough 2" apart on a baking sheet lined with parchment paper.</li><li>Bake the cookies for 8-10 minutes, depending on how well-done you like them.</li></ol>'
        })
        // knex('posts').insert({
        //   id: 10,
        //   title: '',
        //   // headline: 'What\'s better than roasted vegetables? Sweet chili BBQ roasted vegetables.',
        //   date: '1470000735366',
        //   category_id: 2,
        //   body: '',
        //   ingredients: '',
        //   instructions: ''
        // }),
        // knex('posts').insert({
        //   id: 11,
        //   title: '',
        //   // headline: 'What\'s better than roasted vegetables? Sweet chili BBQ roasted vegetables.',
        //   date: '1470000735366',
        //   category_id: 2,
        //   body: '',
        //   ingredients: '',
        //   instructions: ''
        // })
      ]);
    });
};
