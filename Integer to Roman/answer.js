// const values = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

var intToRoman = function (num) {
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const M = ["", "M", "MM", "MMM"];

  return (
    M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] +
    I[Math.floor(num % 10)]
  );
};

console.log(intToRoman(120));
