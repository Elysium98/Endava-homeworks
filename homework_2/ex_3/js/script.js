const array = [1, "A", "B", ["C", 2], "Z", "T", "A", "A", "B"];
const counts = {};

function countLetters(array) {
  for (let letter of array) {
    if (counts[letter]) {
      counts[letter] = counts[letter] + 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
}

console.log(countLetters(array));
