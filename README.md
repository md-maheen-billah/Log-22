# Log 22 (Duration: 1/6 Months)
Today's lesson focused on different javascript simple coding problems, removal of duplicate items from an array, math, abs, round, ceil, floor, random number generation, JS date, JS time, Swap variable and Destructuring.

---

### Practice Task-1:
Find the lowest number in the array below.
`const heights2 = [167, 190, 120, 165, 137];`
```js
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

```
---
### Practice Task-2:
Find the friend with the smallest name.
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`
```js
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

```
---
### Practice Task-3:
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
```js
function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const perLaptopMoney = 35000;
  const perTabletMoney = 15000;
  const perMobileMoney = 20000;

  const laptopTotalMoney = laptopQuantity * perLaptopMoney;
  const tabletTotalMoney = tabletQuantity * perTabletMoney;
  const mobileTotalMoney = mobileQuantity * perMobileMoney;

  const totalMoney = laptopTotalMoney + tabletTotalMoney + mobileTotalMoney;

  return totalMoney;
}
const money = calculateElectronicsBudget(2, 2, 1);
console.log("Total budget is", money);

// PS C:\Projects\Log-22> node practice3.js
// Total budget is 120000

```
---
### Practice Task-4:
You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

        const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];

```js
function findAveragePhonePrice(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  const average = total / products.length;
  return average.toFixed(2);
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
const total = findAveragePhonePrice(phones);
console.log("Average price of phone = ", total);
// PS C:\Projects\Log-22> node practice4.js
// Average price of phone =  58166.67

```
---
### Practice Task-5:
Find the lowest number in the array below.
`const heights2 = [167, 190, 120, 165, 137];`
```js
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

```
---
