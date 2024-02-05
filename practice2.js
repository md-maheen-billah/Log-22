function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const heights = [65, 66, 68, 72, 78, 60, 65, 66];
const min = getMin(heights);
console.log("min value is", min);

// PS C:\Projects\Log-22> node practice2.js
// min value is 60
