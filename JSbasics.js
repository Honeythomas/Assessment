/*
1. Comment Your JavaScript Code
*/
//hey my name is honey.
/*hey my name is honey*/

/*
2. Declare JavaScript Variables
*/

var myName;

/*
3. Storing Values with the Assignment Operator
*/

var a;
a = 7;

/*
4. Assigning the Value of One Variable to Another
*/

var a;
a = 7;
var b;
b = a;

/*
5. Initializing Variables with the Assignment Operator
*/
var a = 9;

/*
6. Declare String Variables
*/

var myFirstName = "honey";
var myLastName = "thomas";

/*
7. Understanding Uninitialized Variables
*/

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

/*
8. Understanding Case Sensitivity in Variables
*/

// Variable declarations
var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/*
9. Explore Differences Between the var and let Keywords
*/

let catName = "Oliver";
let catSound = "Meow!";

/*
10. Declare a Read-Only Variable with the const Keyword
*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/*
11. Add Two Numbers with JavaScript
*/

const addTwo = 10 + 10;
console.log(addTwo);

/*
12. Subtract One Number from Another with JavaScript
*/

const difference = 45 - 33;
console.log(difference);

/*
13. Multiply Two Numbers with JavaScript
*/

const multiply = 8 * 10;
console.log(multiply);

/*
14. Divide One Number by Another with JavaScript
*/

const Quotient = 66 / 33;
console.log(Quotient);

/*
15. Increment a Number with JavaScript
*/

let MyVar = 87;

// Only change code below this line
MyVar = ++MyVar;

/*
16. Decrement a Number with JavaScript
*/

let myVar = 11;

// Only change code below this line
myVar = --myVar;

/*
17. Create Decimal Numbers with JavaScript
*/

const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 5.7;

/*
18. Multiply Two Decimals with JavaScript
*/

const product = 2.0 * 2.5;
console.log(product);

/*
19. Divide One Decimal by Another with JavaScript 
*/
var quotient = 4.4 / 2; // Change this line

/*
20. Finding a Remainder in JavaScript
*/
var remainder = 11 % 3;

/*
21. Compound Assignment With Augmented Addition
*/

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

/*
22. Compound Assignment With Augmented Subtraction
*/

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

/*
23. Compound Assignment With Augmented Multiplication
*/
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

/*
24. Compound Assignment With Augmented Division
*/

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

/*
25. Escaping Literal Quotes in Strings
*/

const MyStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/*
26. Quoting Strings with Single Quotes
*/
const mYStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/*
27. Escape Sequences in Strings
*/

let myStR = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr);

/*
28. Concatenating Strings with Plus Operator
*/

const mySTr = "This is the start. " + "This is the end."; // Change this line

/*
29. Concatenating Strings with the Plus Equals Operator
*/
let myStrr = "This is the first sentence. ";
myStrr += "This is the second sentence."
console.log(myStrr);

/*
30. Constructing Strings with Variables
*/

// Only change code below this line
const myName = "Honey";
const mmyStr = "My name is " + myName + " and I am well!";
console.log(myStr);

/*
31.Appending Variables to Strings 
*/

// Change code below this line
const someAdjective = "Great";
let mySttr = "Learning to code is ";
mySttr += someAdjective;

/*
32. Find the Length of a String
*/

// Setup
let lastNameLength = 0;
const lasTName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/*
33. Use Bracket Notation to Find the First Character in a String
*/

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

34. Understand String Immutability

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

35. Use Bracket Notation to Find the Nth Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

36. Use Bracket Notation to Find the Last Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

37.Use Bracket Notation to Find the Nth-to-Last Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

38. Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The "+ myAdjective +" " +" "+ myNoun + " " + myVerb +" " + myAdverb + "."; // Change this line
// Only change code above this line
console.log(wordBlanks);

39. Store Multiple Values in one Variable using JavaScript Arrays

// Only change code below this line
const myArray = ["Twenty", 500];
console.log(myArray);

40. Nest one Array within Another Array

// Only change code below this line
const myArray = [["Honey", 23], ["Bobby", 16]];
console.log(myArray);

41.Access Array Data with Indexes

const myArray = [50, 60, 70];
var myData = myArray[0];

42. Modify Array Data With Indexes

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

43. Access Multi-Dimensional Arrays With Indexes

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

44. Manipulate Arrays With push()

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

45. Manipulate Arrays With pop()

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

46. Manipulate Arrays With shift()

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

47. Manipulate Arrays With unshift()

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

48. Shopping List

const myList = [["Milk", 2],["Milk", 2],["Milk", 2],["Milk", 2],["Milk", 2]];

49. Write Reusable JavaScript with Functions

function reusableFunction(){
  console.log("Hi World")
}
reusableFunction()

50. Passing Values to Functions with Arguments

function functionWithArgs(){
  console.log(50+100)
}
functionWithArgs();

51. Passing Values to Functions with Arguments

function functionWithArgs(a,b){
  console.log(a+b)
}
functionWithArgs(2,1);
functionWithArgs(12,4);

52. Return a Value from a Function with Return

function timesFive(num){
return(num * 5);
}
console.log(timesFive(5));

53. Global Scope and Functions

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

54. Local Scope and Functions

function myLocalScope() {
  // Only change code below this line
var myVar
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

55. Global vs. Local Scope in Functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

56. Understanding Undefined Value returned from a Function

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

57. Assignment with a Returned Value

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

58.Stand in Line

function nextInLine(arr, item) {
  // Only change code below this line
arr.push(item);
return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

59. Understanding Boolean Values

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

60. Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line

}

61. Comparison with the Equality Operator

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

62. Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

63. Practice comparing different values

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

64.Comparison with the Inequality Operator

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

65. Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

66. Comparison with the Greater Than Operator

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

67. Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

68. Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

69. Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

70. Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

71. Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

73. Introducing Else Statements

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

74. Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5){
return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }


  return "Between 5 and 10";
}

testElseIf(7);

75. Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

76. Chaining If Else Statements

function testSize(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else {
    return "Huge"
  }
}

console.log(testSize(20));

77. Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}

// Change these values to test
console.log(golfScore(5, 8));

78. Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;  
}

// Change this value to test
console.log(caseInSwitch(3));

79. Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
    return answer;  
  }

// Change this value to test
console.log(switchOfStuff("c"));

80. Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;  
}

// Change this value to test
console.log(sequentialSizes(8));

81. Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);

82. 
83. 
84. 
85.
86. 
87. 
88. 
89. 
90.
91. 
92. 
93.
94. 
95. 
96. 
97. 
98. 
99. 
100.
101. 
102. 
103. 
104. 
105. 
106. 
107. 
108. 
109. 
110.
111.
112. 
113.