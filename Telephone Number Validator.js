function telephoneCheck(str) {
  str = str.replace(/\s+/g, "");
  let numStr = str.match(/\d+/g).join("");

  let hasTen = false;
  let hasEleven = false;
  let firstLetterOne = false;
  let notOnlyNumber = false;
  let correctParen = false;
  let correctDash = false;

  if (numStr.length === 10) {
    hasTen = true;
  } else if (numStr.length === 11) {
    hasEleven = true;
  }

  if (numStr[0] === "1") {
    firstLetterOne = true;
    str = str.slice(1);
  }
  var parenFormat = /[()]+/g;
  if (parenFormat.test(str)) {
    notOnlyNumber = true;
  }

  var dashFormat = /[-]+/g;
  if (dashFormat.test(str)) {
    notOnlyNumber = true;
  }

  if (str[0] === "(" && str[4] === ")" && str[8] === "-") {
    correctParen = true;
  }
  if (str[3] === "-" && str[7] === "-") {
    correctDash = true;
  }

  if (!hasTen && !hasEleven) {
    return false;
  } else if (hasEleven && !firstLetterOne) {
    return false;
  } else if (notOnlyNumber && !correctDash && !correctParen) {
    return false;
  } else {
    return true;
  }
}

telephoneCheck("1 555-555-5555");
