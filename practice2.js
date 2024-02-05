function findSmallestName(inputArray) {
  let smallestName = inputArray[0];
  let minLength = inputArray[0].length;

  for (const word of inputArray) {
    if (word.length < minLength) {
      smallestName = word;
      minLength = word.length;
    }
  }
  return smallestName;
}

const inputArray = ["rahim", "robin", "rafi", "ron", "rashed"];
const smallestName = findSmallestName(inputArray);
console.log(smallestName);
// PS C:\Projects\Log-22> node practice2.js
// ron
