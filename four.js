var paragraph = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';
changeAllMentions(paragraph);

function changeAllMentions(paragraph) {
  var r1 = paragraph.replace(/Strawberry/g, 'Banana');
  var r2 = r1.replace(/strawberry/g, 'banana');
  var r3 = r2.replace(/Strawberries/g, 'Bananas');
  var r4 = r3.replace(/strawberries/g, 'bananas');
  return r4;
}