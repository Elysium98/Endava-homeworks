const array = [1, "A", "B", ["C", 2], "Z", "T", "A", "A", "B"];
const counts = {};

function countLetters(array) {
  array.forEach(function (character) {
    if (counts[character]) {
      counts[character]++;
    } else {
      counts[character] = 1;
    }
  });
  return counts;
}

console.log(countLetters(array));
