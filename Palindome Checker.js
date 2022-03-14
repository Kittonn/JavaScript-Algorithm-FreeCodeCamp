function palindrome(str) {
  var text = str.toLowerCase().split(/[^A-Aa-z0-9]/gi).join("");
  var new_text = text.split("").reverse().join("");
  if (text === new_text) {
    return true;
  }

  return false;
}

var str = "0_0 (: /- :) 0-0";

palindrome(str);
