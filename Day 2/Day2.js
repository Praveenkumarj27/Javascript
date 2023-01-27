// convert number to simple words.  (ex: 123 -> one two three)

function converToWords(num) {
  var value = num.toString().split(""); //=>['5','5']
  words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var temp = "";

  for (let i = 0; i < value.length; i++) {
    temp += " " + words[value[i]];
  }
  console.log(temp);
}

converToWords(55);

//-------------------------------------------------------------------------------------------------------------------------------------------------------

function doConvert(numberInput) {
  let oneToTwenty = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let tenth = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let num = ("0000000" + numberInput)
    .slice(-7)
    .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  // console.log(num);
  if (!num) return;

  let outputText =
    num[1] != 0
      ? (oneToTwenty[Number(num[1])] ||
          `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " million "
      : "";

  outputText +=
    num[2] != 0
      ? (oneToTwenty[Number(num[2])] ||
          `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "hundred "
      : "";
  outputText +=
    num[3] != 0
      ? (oneToTwenty[Number(num[3])] ||
          `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + " thousand "
      : "";
  outputText +=
    num[4] != 0
      ? (oneToTwenty[Number(num[4])] ||
          `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "hundred "
      : "";
  outputText +=
    num[5] != 0
      ? oneToTwenty[Number(num[5])] ||
        `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
      : "";

  console.log(outputText);
}

doConvert(23);


//-----------------------------------------------------------------------------------------------------------

function add(num) {
  var temp = 0;
  var check = num.toString().split("");
  for (var i = 0; i < check.length; i++) {
    temp += parseInt(check[i]);
  }
  console.log(temp);
}
add(23);

//---------------------------------------------------------------------------------------------------------------

var num = 2717;
var sum = 0;
var val = 0;
var check = num.toString().split("");

for (var i = 0; i < check.length; i++) {
  sum += parseInt(check[i]);
}

let ans = sum.toString().split("");

for (var index = 0; index < ans.length; index++) {
  val += parseInt(ans[index]);
}

console.log(val);

//-----------------------------------------------------------------------------------------------------------------------------------
// In Arrays: In Arrays, values of corresponding elements get stored in the variables.

//  In order to give default values in arrays when applying the destructuring concept in arrays,
// we need to initialize values with some value. In this way, the default values will be assigned to the variables.

let a, b, c;
[a, b, c = 30, d] = [10, 20];

console.log(a); //10

console.log(b); //20

console.log(c); //30
console.log(d); //undefined

//--------------------------------------------------------------------------------------------------------------

// Compound Assignment Operator
//      Assignment operators are used to assign values to JavaScript variables.

// =  Assign
var x = 10;
var y = 5;
x = y;
console.log(x); // 5

// +=    Add assign
x += (y) => (x = x + y);
x = 10 + 5;
console.log(x); //15

// -=      Subract assign
x -= (y) => (x = x - y);
x = 10 - 5;
console.log(x); //5

// Multiply assign *=
x *= (y) => (x = x * y);
x = 10 * 5;
console.log(x); //50

// Division assign /=
x /= (y) => (x = x / y);
x = 10 / 5;
console.log(x); //2

// Mod assign %=
x %= (y) => (x = x % y);
x = 10 % 5;
console.log(x); //0

//-------------------------------------------------------------------------------------------------------------
