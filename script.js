const billPrice = 430;
const tip =
  billPrice >= 50 && billPrice <= 300 ? billPrice * 0.15 : billPrice * 0.2;

console.log(
  `The bill vaule vas ${billPrice}, the tip is ${tip}, the total price is ${
    billPrice + tip
  }`
);
