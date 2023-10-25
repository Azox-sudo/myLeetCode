var twosum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[i] + nums[y] == target && i != y) {
        return [i, y];
      }
    }
  }
};

var num = [2, 7, 11, 15];
console.log(twosum(num, 9));

var num = [3, 2, 4];
console.log(twosum(num, 6));
