// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // append the cat to the end of the cats array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // prepend the cat to the beginning of the cats array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // remove the last cat from the cats array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // remove the first cat from the cats array
  cats.shift();
}

function appendCat(name) {
  // create a new array with all the cats plus the new cat
  const newCats = [...cats, name];
  // return the new array without changing the original cats array
  return newCats;
}

function prependCat(name) {
  // create a new array with the new cat followed by all the cats
  const newCats = [name, ...cats];
  // return the new array without changing the original cats array
  return newCats;
}

function removeLastCat() {
  // create a new array with all the cats except the last one
  const newCats = cats.slice(0, -1);
  // return the new array without changing the original cats array
  return newCats;
}

function removeFirstCat() {
  // create a new array with all the cats except the first one
  const newCats = cats.slice(1);
  // return the new array without changing the original cats array
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};

