function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "Jim is larger";
  } else if (num2 > num1 && num2 > num3) {
    return "Tim is larger";
  } else {
    return "Kim is larger";
  }
}

const jim = 256;
const tim = 389;
const kim = 168;
const maximumNumber = maxOfThree(jim, tim, kim);
console.log(maximumNumber);
