function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const heights2 = [167, 190, 120, 165, 137];
const min = getMin(heights2);
console.log("Lowest number is", min);

// PS C:\Projects\Log-22> node practice2.js
// Lowest number is 120
