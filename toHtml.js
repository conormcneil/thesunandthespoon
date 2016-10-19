// new-line separated paragraphs
var body = 'Do you have way too much zucchini overtaking your kitchen counters and refrigerator drawers? Maybe you were a little overzealous during the spring planting season, or maybe that 10lb basket of zucchini at the farmer’s market was just too pretty to pass up. Either way, you’re getting desperate and maybe even doing things like hiding those big green vegetables in…gasp…cookies! However delicious those zucchini cookies and cakes really are, my 10 year-old self is still mortified.\nLuckily, I’ve come a long way since then. These days you don’t even have to “hide” zucchini in order for me to eat it. I love it sauteed, grilled, roasted, and even raw (zucchini noodles, anyone?). One of my favorite combinations has always been zucchini and pesto. Because zucchini is so mild, it allows the pesto to really shine. Put those two things over a bed of pasta and you have yourself a wonderful summer meal.\nThe pesto in this dish is a slightly different than your run of the mill pesto. It’s made up of quelites, a Mexican variety of spinach, toasted pecans, garlic, Parmigiano-Reggiano (or nutritional yeast), and, because I’m not entirely insane, basil. If you can’t get your hands on quelites, baby spinach is a wonderful substitution. This milder version of pesto creates balance between itself, the tender sweet zucchini ribbons, and the linguine. I can only hope that it serves in your quest to use up all of your summer squash!'
// new-line-separated ingredients
var ingredients = '¾ cup toasted pecans\n1 clove minced garlic\n½ cup grated Parmigiano-Reggiano cheese\n½ teaspoon sea salt\n¼ teaspoon freshly ground pepper\n2 cups quelite leaves\n1 cup basil leaves\n¼ cup extra virgin olive oil\n¼ cup purified water\n1 tablespoon lemon juice\n12 oz. linguine\n2 zucchini or summer squash of choice'
// colon-separated string of instructions
var instructions = 'Heat a large pot of water over high heat.\nWhile the water reaches boiling temperatures, make the pesto.\nIn a food processor, add pecans, garlic, Parmigiano-Reggiano, salt, pepper, quelite leaves, and basil leaves.\nPulse the mixture until everything is combined and the pecans achieve a chopped texture.\nAdd the olive oil, purified water, and lemon juice to the food processor.\nPulse just until everything is combined. The pesto should be mostly smooth but should still retain some texture from the pecans.\nAdd 1-tablespoon sea salt to the pot of boiling water.\nCook the Linguine according to package directions in the pot of boiling water.\nWhile the linguine is cooking, use a vegetable peeler to peel the squash into long ribbons.\nOnce the linguine has cooked, drain it in a colander over the sink.\nIn the pot that was used to cook the linguine, add the drained linguine, pesto, and ribboned zucchini and toss until everything is evenly combined.\nServe and top with grated Parmigiano-Reggiano.'

function makeSeed(body,ingredients,instructions) {
  body = '<p>' + body.replace(/\n/g,'</p><p>') + '</p>'

  ingredients = '<ul><li>' + ingredients.replace(/\n/g,'</li><li>') + '</li></ul>'

  instructions = '<ol><li>' + instructions.replace(/\n/g,'</li><li>') + '</li></ol>'

  return {body,ingredients,instructions};
}

console.log(makeSeed(body,ingredients,instructions));
