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
