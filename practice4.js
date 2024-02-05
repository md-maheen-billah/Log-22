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
