function convertToRoman(num) {
  var roman_num = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  var ans = [];

  roman_num.forEach((n) => {
    while (num >= n[1]) {
      ans.push(n[0]);
      num -= n[1];
    }
  });
  return ans.join("");
}

console.log(convertToRoman(300));
