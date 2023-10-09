let friends = ["mohamed", "ahmed", "emary", ["omar", "ahmed"]];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[2][0]);
console.log(friends[2].split(""));
console.log(friends[2].split(""));
console.log(friends[friends.length - 1][0]);
console.log(friends[friends.length - 1][0][1]);
console.log(friends);
friends[friends.length - 1][0] = "Mohamed";
console.log(friends);
friends[3] = "No array anymore";
console.log(friends);
console.table(friends); // appears in console
console.log(Array.isArray(friends));

friends = [0, 1, 2, 3, 4];
console.log(friends);
console.log(friends.length);
friends[9] = 9;
console.log(friends);
console.log(friends.length);

friends = [0, 1, 2, 3, 4];
friends.length = 3;
console.log(friends);

friends.unshift("numberone");
console.log(friends);

friends.push("last");
console.log(friends);

let first = friends.shift();
console.log(first);
console.log(friends);
first = friends.unshift(6);
console.log(friends);
console.log(first);

console.log(friends);
let last = friends.pop();
console.log(last);
console.log(friends);

console.log(friends);
console.log(friends.indexOf("ahmed"));
console.log(friends.indexOf("emary"));
console.log(friends.indexOf("emary") === -1);

console.log(friends);
console.log(friends.lastIndexOf("ahmed"));
console.log(friends.lastIndexOf("emary"));
console.log(friends.lastIndexOf("emary") === -1);

console.log(friends.includes(1));

let randIntegers = [7, 2, 51, 23, 12, 34, 5, 6, 7, 8, 9, 10];
console.log(randIntegers.sort());

console.log(randIntegers.reverse());

let arr1 = [7, 2, 51, 23, 12, 34, 5];
// console.log(arr1.slice(_, 4)); // remember the last index is not included
console.log(arr1.slice(3));
console.log(arr1.slice(3));
let arr = [7, 2, 51, 23, 12, 34, 5];
// remember the last index is not included
console.log(arr);
// console.log(arr.slice(_, 4));
console.log(arr.slice(3));
console.log(arr.slice(-3)); // last 3 elements 12, 34, 5
console.log(arr.slice(2, -2)); // 51, 23, 12
console.log(arr.slice(-4, -2)); // 23, 12
console.log(arr);
console.log(arr.splice(3, 2, 999)); // 23, 12
console.log(arr);

let nums1 = [1, 2, 3, 4];
let nums2 = [5, 6];
let nums3 = [7, 8, 9];

console.log(nums1.concat("In Between1", nums2, "In Between2", nums3));
console.log(nums1);

console.log(nums1.concat());

console.log(nums1.join(""));

let nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let str = "";
for (let num of nums) {
  str += num;
  if (num === 20) break;
  str += " + ";
}

console.log(str);
console.log(
  `${nums.join(" + ")} = ${nums.reduce((total, num) => total + num)}`
);

// ===========================================================

// https://elzero.org/javascript-bootcamp-assignments-lesson-from-040-to-047/

// ===========================================================

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.pop());
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends.splice(num));
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// ===========================================================

friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

// ===========================================================

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ===========================================================

let website = "Go";
console.log(website.toUpperCase());
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
website = words.pop().shift().toUpperCase().substring(2);
console.log(website); // ZERO

// ===========================================================

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// solution 1
console.log(
  haystack.join(" ").includes(needle) == true ? "found" : "not found"
);

// solution 2
console.log(haystack.includes(needle) == true ? "found" : "not found");

// solution 3
console.log(haystack.indexOf("JS") != -1 ? "found" : "not found");

// ===========================================================

arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort().join("").toLowerCase();

console.log(allArrs.slice(arr2.length)); // fxy

// ===========================================================

let array = [
  "one",
  "two",
  "three",
  "four",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let i = 0;
mainloop: for (; i < array.length; i++) {
  // if (i == 5) break;
  console.log(array[i]);
}

// ===========================================================

console.log("=".repeat(30));

friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
while (index < friends.length) {
  if (friends[index][counter] === "A" || typeof friends[index] === "number") {
    index++;
    continue;
  }
  console.log(friends[index]);
  index++;
}

// ===========================================================

let start = 10;
let end = 100;
let exclude = 40;

for (; start <= end; start += 10) {
  if (start === 40) continue;
  console.log(start);
}

// ===========================================================

start = 10;
end = 0;
let stop = 3;

// Output
for (start; start != stop; start--) {
  console.log(start);
}

// ===========================================================

start = 1;
end = 6;
let breaker = 2;

for (start; start <= end; start++) {
  console.log(start);
  console.log("--" + breaker);
  console.log("--" + breaker * breaker);
}

// ===========================================================

index = 10;
let jump = 2;

for (;;) {
  if (index === jump) break;
  console.log(index);
  index -= jump;
}

// ===========================================================

friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
letter = letter.toLocaleUpperCase();
for (let friend of friends) {
  if (friend.startsWith(letter)) continue;
  console.log(friend);
}

// ===========================================================

start = 0;
let swappedName = "elZerO";
let newName = "";

for (char in swappedName) {
  if (swappedName[char] === swappedName[char].toUpperCase()) {
    newName += swappedName[char].toLowerCase();
  } else {
    newName += swappedName[char].toUpperCase();
  }
}
console.log(newName);

// ===========================================================

start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (start; start < mix.length; ) {
  start++;
  if (start === mix.length || typeof mix[start] === "string") continue;
  console.log(mix[start]);
}
