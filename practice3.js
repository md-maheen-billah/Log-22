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
