function moneyAmount(shirtQuantity, pantQuantity, shoeQuantity) {
  const perShirtMoney = 500;
  const perPantMoney = 300;
  const perShoeMoney = 900;

  const shirtTotalMoney = shirtQuantity * perShirtMoney;
  const pantTotalMoney = pantQuantity * perPantMoney;
  const shoeTotalMoney = shoeQuantity * perShoeMoney;

  const totalMoney = shirtTotalMoney + pantTotalMoney + shoeTotalMoney;

  return totalMoney;
}
const money = moneyAmount(2, 2, 1);
console.log("Money Needed", money);

// PS C:\Projects\Log-22> node practice3.js
// Money Needed 2500
