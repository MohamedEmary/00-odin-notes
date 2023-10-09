let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let no3 = myNums.filter((item) => {
  if (item % 3 !== 0) return item;
});

console.log(no3);

let myName = "MohAmeD";
let swappedName = myName
  .split("")
  .map((letter) =>
    letter === letter.toUpperCase()
      ? letter.toLocaleLowerCase()
      : letter.toUpperCase()
  )
  .join("");
console.log(swappedName);

let numbers = [-3, -2, -1, 0, 1, 2, 3];
let invertedNums = numbers.map((num) => -num);
console.log(invertedNums);

let str = "moha123med";
let noNumStr = str
  .split("")
  .filter((char) => {
    if (isNaN(Number(char))) {
      return char;
    }
  })
  .map((char) => char.toUpperCase())
  .join("");
console.log(noNumStr);

// if (Number("a") === Number("a")) {
//   console.log("True");
// }

// if (isNaN(Number("a")) === isNaN(Number("a"))) {
//   console.log("True");
// }

noNumStr = str
  .split("")
  .map((char) => (isNaN(Number(char)) ? char : ""))
  .join("");

noNumStr;

let names = [
  "ahmed",
  "ali",
  "arr",

  "body",
  "boby",

  "cody",
  "codas",

  "dody",
  "dagfa",

  "esada",
  "easdasd",
];

let letterANames = names.filter((name) => name[0] === "a");
letterANames;

let sentence = "I Love Foood Code Too Playing Much";
let fourChars = sentence
  .split(" ")
  .filter((word) => word.length <= 4)
  .join(" ");
fourChars;

let mix = "A13BS2ZX";
let mult = mix
  .split("")
  .filter((char) => !isNaN(Number(char)))
  .map((num) => Number(num) ** 2);

mult;

mult = [2, 4, 5];
console.log(mult.reduce((num1, num2) => num1 * num2));

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbersSum = numbers.reduce((acc, curr) => acc + curr);
numbersSum;

let emptyArr = [];

let res = emptyArr.reduce((param1, param2) => param1 + param2, 2);

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let biggest = theBiggest.reduce((prev, curr) =>
  prev.length > curr.length ? prev : curr
);

console.log(biggest);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let name = removeChars.filter((char) => char !== "@").join("");
name;

name = removeChars
  .filter((char) => char !== "@")
  .reduce((curr, prev) => (curr += prev));

console.log(name);

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((str) => {
    if (isNaN(Number(str))) {
      return str;
    }
  })
  .map((char) => (char === "_" ? " " : char))
  .join("")
  .slice(true, myString.length);

console.log(solution);

// console.log(solution);
