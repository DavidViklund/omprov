// 9. Hitta den längsta strängen (3p)
// Skriv en funktion findLongestString som tar en array av
// strängar som input och returnerar den längsta strängen från arrayen.

function findLongestString(str) {
  let string = str.split();
  let longestString = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestString) {
      longestString = words[i].length;
    }
  }
  return longestString;
}

console.log(findLongestString(["apple", "banana", "orange", "kiwi"]));
// Ska logga: "banana"
console.log(findLongestString(["dog", "cat", "elephant", "lion"]));
// Ska logga: "elephant"
