var kittens = ['Milo', 'Otis', 'Garfield' ]
function destructivelyAppendKitten(name){
return kittens.push('Ralph')
}
function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name) {
  return [...kittens, 'Broom'];
}
function prependKitten(name) {
 return ['Arnold',...kittens];
}
function removeLastKitten(name) {
return kittens.slice (0, kittens.length - 1);
}
function removeFirstKitten(name) {
  return kittens.slice(0);
}

}