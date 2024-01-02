var isAnagram = function (s, t) {
    //   let result = [];
    //   for (let i = 0; i < s.length; i++) {
    //     for (let x = 0; i < t.length; x++) {
    //       if (s[i] === t[x]) {
    //         result.push(t[x]);
    //         i++;
    //         console.log(s[i] + t[x]);
    //       }
    //     }
    //     return result;
    //   }
    // let container1 = s.split("");
    // let container2 = t.split("");
    // container1.map((letter) => {
    // });
    var container = new Map();
    for (var i = 0; i < s.length; i++) {
        if (!container.has(s[i])) {
            container.set(i, s[i]);
        }
    }
};
console.log(isAnagram("anagram", "nagaram"));
