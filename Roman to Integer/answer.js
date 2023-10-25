/*
/*
this is my thought process of the answer
[1]create a map or arrow array that has the answers
[2]i will convert it into number 
    [a]adding ex: iii = 3
    [b]subtracting ex: cm = 1000-100 = 900
[3] calculate the answer
----------------------------------------------------

const RomanToInt = (s) => {
    const values = new Map();
    values.set("i", 1);
    values.set("v", 5);
    values.set("x", 10);
    values.set("l", 50);
    values.set("c", 100);
    values.set("d", 500);
    values.set("m", 1000);
  
    var container = [];
    var result = [];
    //converting the values
    for (let i = 0; i < s.length; i++) {
      container.push(values.get(s[i].toLowerCase()));
    }
    //making values negative so we can add them up later
    for (let i = 0; i < container.length; i++) {
      if (container[i] < container[i + 1]) {
        result.push(container[i] * -1);
      } else {
        result.push(container[i]);
      }
    }
    var finalResult = 0;
    result.forEach((e) => {
      finalResult = e + finalResult;
    });
    return finalResult;
  };
  
  console.log(RomanToInt("LVIII"));
  
*/
//next one improve by chatgpt
const values = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

var romanToInt = function (s) {
  var finalResult = 0;
  var prevValue = 0; // Store the previous value to determine whether to add or subtract

  for (let i = 0; i < s.length; i++) {
    const currentValue = values[s[i].toLowerCase()];

    if (currentValue > prevValue) {
      finalResult += currentValue - 2 * prevValue; // Subtract twice the previous value
    } else {
      finalResult += currentValue;
    }

    prevValue = currentValue;
  }

  return finalResult;
};

console.log(romanToInt("MCMXCIV"));
