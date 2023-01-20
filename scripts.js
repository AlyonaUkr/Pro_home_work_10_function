const removeElement = (array, item) => {
  return array.filter(el => el !== item);
}

console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 5));
console.log(removeElement(['cat', 'dog', 'lion', 'cow', 'pig'], 'lion'));


