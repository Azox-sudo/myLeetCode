function containsDuplicate(nums = [1, 2, 3, 5, 1]) {
  //   console.log(nums.sort());
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] - nums[i + 1] === 0) {
  //       return true;
  //     }
  //   }
  //   return false;

  const s = new Set(nums);
  return s.size !== nums.length;
}

console.log(containsDuplicate());
