function two_sums(num, target) {
  const numMap = new Map(); // Use a Map to store numbers and their indices

  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];
    console.log(complement);
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(num[i], i); // Store the current number and its index in the Map
  }
  console.log(numMap);

  return null; // If no solution is found, return null
}

const num = [1, 5, 8, 3];
const target = 13;
const answer = two_sums(num, target);

two_sums(num, target);
