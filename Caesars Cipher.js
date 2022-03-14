function rot13(text) {
  var txt = [
    ["A", "N"],
    ["B", "O"],
    ["C", "P"],
    ["D", "Q"],
    ["E", "R"],
    ["F", "S"],
    ["G", "T"],
    ["H", "U"],
    ["I", "V"],
    ["J", "W"],
    ["K", "X"],
    ["L", "Y"],
    ["M", "Z"],
    ["N", "A"],
    ["O", "B"],
    ["P", "C"],
    ["Q", "D"],
    ["R", "E"],
    ["S", "F"],
    ["T", "G"],
    ["U", "H"],
    ["V", "I"],
    ["W", "J"],
    ["X", "K"],
    ["Y", "L"],
    ["Z", "M"],
  ];
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ans = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " " || format.test(text[i])) {
      ans.push(text[i]);
    } else {
      txt.forEach((t) => {
        if (text[i] === t[0]) {
          ans.push(t[1]);
        }
      });
    }
  }
  return ans.join("");
}

console.log(rot13("SERR CVMMN!"));
