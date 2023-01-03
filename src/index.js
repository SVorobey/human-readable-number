module.exports = function toReadable (number) {
  let hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
  let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let tenNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let str = number.toString().split("");
  let result = "";
  if(str.length === 3) {
    if(str[1] === "1") {
      result = hundreds[Number(str[0])] + " " + tenNineteen[Number(str[2])];
    }
    else if (str[1] === "0" && str[2] === "0") {
      result = hundreds[Number(str[0])];
    }
    else if (str[1] === "0") {
      result = hundreds[Number(str[0])] + " " + ones[Number(str[2])];
    }
    else if (str[2] === "0") {
      result = hundreds[Number(str[0])] + " " + tens[Number(str[1])];
    }
    else result = hundreds[Number(str[0])] + " " + tens[Number(str[1])] + " " + ones[Number(str[2])];
  }
  else if (str.length === 2) {
    if(str[0] === "1") {
      result = tenNineteen[Number(str[1])];
    }
    else if (str[1] === "0") {
      result = tens[Number(str[0])];
    }
    else result = tens[Number(str[0])] + " " + ones[Number(str[1])];
  }
  else result = ones[number];
  return result;
}