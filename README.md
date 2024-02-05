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
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate the total salary to be provided by the company in a month.

        const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        
```js
function findTotalSalary(employees) {
  let total = 0;
  for (const employee of employees) {
    const totalIncrement = employee.experience * employee.increment;
    const salary = employee.starting + totalIncrement;
    total = total + salary;
  }
  return total;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const total = findTotalSalary(employees);
console.log(
  "Total salary has to be provided by the company in a month = ",
  total
);
// PS C:\Projects\Log-22> node practice5.js
// Total salary has to be provided by the company in a month =  149000

```
---
