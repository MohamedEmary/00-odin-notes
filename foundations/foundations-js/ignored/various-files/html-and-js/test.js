// Take input from user using npm readline-sync package

// const readline = require("readline-sync");
// const name = readline.question("What is your name? ");
// console.log(`your name is ${name}`);

// ====================================================

// let str = "thIs is a string tHis is thIs";
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.padStart(str.length + 5, "$"));
// let num = 99;

// console.log(Number(num.toString().padStart(6, "12")));
// console.log(typeof Number(num.toString().padStart(4, "1")));

// console.log(num.toString().padEnd(6, "21"));
// console.log(typeof num.toString().padStart(4, "1"));

// console.log(str.charAt(100));
// console.log(str.charAt(10));
// console.log(str.charCodeAt(6));

// let text = "text";
// console.log(text[2]);
// console.log(text[6]);

// console.log(text.sup());

// const a = "a";
// const b = "b";
// if (a < b) {
// 	// true
// 	console.log(`${a} is less than ${b}`);
// } else if (a > b) {
// 	console.log(`${a} is greater than ${b}`);
// } else {
// 	console.log(`${a} and ${b} are equal.`);
// }

// text = "1+4";

// console.log(eval(text));

// ====================================================

// let x = 11;
// let y = 11;
// if (x > y) {
// 	console.log(`x = ${x}`);
// } else if(x === y) {
// 	console.log(`x, y = ${x}`);
// }else{
// 	console.log(`y = ${y}`);
// }

// ====================================================

// let shoppingDone = true;
// let childsAllowance;

// if (shoppingDone) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }

// console.log(childsAllowance);

// ====================================================
// const readline = require("readline-sync");
// let choice = readline.question("What is your choice? ");

// switch (choice) {
// 	case "a":
// 		choice = "aaa";
// 		break;
// 	case "b":
// 		choice = "bbb";
// 		break;
// 	case "c":
// 		choice = "ccc";
// 		break;
// 	case "d":
// 		choice = "ddd";
// 		break;
// 	case "e":
// 		choice = "eee";
// 		break;
// 	default:
// 		choice = "zzz";
// 		break;
// }

// console.log(`your choice is: ${choice}`);

// ====================================================

// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");
// // console.clear();
// console.table(["Hello", "World"]);
// console.dir(["Hello", "World"]);
// console.group();
// console.groupCollapsed();
// console.count();
// console.trace();
// console.time();

// console.clear(); // Just cleaars the console
// console.table(["Hello", "World"]);
// console.table([
// 	{ name: "Mohamed", age: 25, job: "Software Engineer" },
// 	{ name: "Ahmed", age: 30, job: "Doctor" },
// 	{ name: "Ali", age: 20, job: "Student" },
// ]);
// console.dir(["Hello", "World"]);

// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");

// console.count("Label 1");
// console.count("Label 2");
// console.count("Label 1");
// console.count("Label 1");
// console.count("Label 2");

// console.time("Timer 1");

// for (let i = 0; i < 1000000; i++) {
// 	if (i === 5000) {
// 		console.log("i = 5000");
// 	}
// }

// console.timeEnd("Timer 1");

// ====================================================

// console.log("object");

// console.log(typeof console);
// console.log(typeof console.log);

// function hello(name, age) {
// 	age = age ?? "unavailable";
// 	if (age >= 20) {
// 		return `hello ${name} and you are ${age} years old`;
// 	}
// 	return `hello ${name} and you are ${age} years old`;
// }

// for (let i = 0; i <= 10; i++) {
// 	console.log(i === 10 ? i : "test");
// }

// function hello_console(name) {
// 	console.log(`hello ${name}`);
// }

// console.log(hello("Mohamed", 20));
// console.log(hello("Ahmed", 50));
// console.log(hello("Emary"));

// hello_console("Mohamed");
// hello_console("Ahmed");
// hello_console("Emary");

// function generate(start, end) {
// 	numbers = "";
// 	for (let i = start; i <= end; i++) {
// 		numbers += i;
// 		numbers += "\n";
// 	}
// 	numbers += "=".repeat(10);
// 	return numbers;
// }

// console.log(generate(1, 5));
// console.log(generate(1, 7));

// function sum(...numbers) {
// 	let total = 0;
// 	for (const number of numbers) {
// 		total += number;
// 	}
// 	return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// ====================================================

// let mixedArray = [1, "two", true, { name: "John", age: 30 }];
// console.log(mixedArray);

// function getType(arr) {
// 	let types = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		types.push(typeof arr[i]);
// 	}
// 	return types;
// }

// getType(mixedArray);

// for (let element of getType(mixedArray)) {
// 	console.log(element);
// }

// function showDetails(...items) {
// 	if (items.length !== 3) {
// 		return;
// 	}
// 	let age, available, userName;
// 	for (item of items) {
// 		console.log(item);
// 		typeof item == "string"
// 			? (userName = item)
// 			: typeof item == "number"
// 			? (age = item)
// 			: (available = item);
// 	}

// 	console.log(
// 		`Hello ${userName} your age is ${age} and ${
// 			available
// 				? "You are available for hire"
// 				: "You are not available for hire"
// 		}`
// 	);
// }

// showDetails(true, 23, "Mohamed");

// console.log(true);

// ====================================================

// let anon_func = function (...numbers) {
// 	let total = 0;
// 	for (number of numbers) {
// 		total += number;
// 	}
// 	return total;
// };

// console.log(anon_func(1, 2, 3, 4, 5));

// ====================================================

// const myFunc = function myFuncName() {
//   // ...
// };

// function get_info(first_name, last_name, birth_year) {
// 	function full_name() {
// 		return `${first_name} ${last_name}`;
// 	}

// 	function age() {
// 		return 2023 - birth_year;
// 	}

// 	function info() {
// 		let info = `Your name is ${full_name()} and you are ${age()} yo`;
// 		return info;
// 	}

// 	return info();
// }

// console.log(get_info("Mohamed", "Ahmed", 2010));

// let sum_sqrt = (num1, num2) => {
// 	sum = num1 + num2;
// 	return Math.sqrt(sum);
// };
// console.log(sum_sqrt(10, 6));

// // Example of removing `return` and `{ }`
// let get_sum = (num1, num2) => num1 + num2;
// console.log(get_sum(30, 20));

// // Example of removing `( )`, `{ }`, and `return`
// let plus30 = (num) => num + 30;
// console.log(plus30(30));

// let get30 = (_) => 30;
// console.log(get30(30));

// var a = 1;
// let b = 2;

// function scope() {
// 	console.log(`a = ${a}`);
// 	console.log(`b = ${b}`);
// 	var a = 10;
// 	let b = 20;
// }

// scope();
// console.log(a);
// console.log(b);

// var c = 1;
// let d = 2;

// function scope() {
// 	var c = 10;
// 	let d = 20;
// 	console.log(`c = ${c}`);
// 	console.log(`d = ${d}`);
// }

// scope();

// console.log(c);
// console.log(d);

// let x = 5;

// if (true) {
// 	let x = 20;
// 	console.log(x);
// }
// console.log(x);

// let a = 5;
// var b = 3;

// if (true) {
// 	let a = 50;
// 	var b = 30;
// 	console.log(a);
// 	console.log(b);
// }
// console.log(a);
// console.log(b);

// var a = 5;
// let b = 3;

// if (true) {
// 	console.log(a); // 50
// 	console.log(b); // 30
// 	var a = 50; // This is a different variable than the one defined before
// 	let b = 30; // This overwrites the variable b
// }
// console.log(a); // 5
// console.log(b); // 30 not 3

// var c = 1;
// let d = 2;
// function scope() {
// 	var c = 10;

// 	let d = 20;
// 	console.log(`c = ${c}`);
// 	// 10

// 	console.log(`d = ${d}`);
// 	// 20
// }
// scope();
// console.log(c); // 1
// console.log(d); // 2

// function outer() {
// 	let a = 10;
// 	function inner() {
// 		let a = 100;
// 		let b = 20;
// 		console.log(a); // 100
// 	}
// 	inner();
// 	console.log(b); // Uncaught ReferenceError: b is not defined
// }

// outer();

// let arrow_names = (...names) => `[${[...names].join("], [")}]` + ` => Done!`;

// console.log(arrow_names("Mohamed", "Ahmed", "Emary"));

// ====================================================

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => ;

// console.log(calc(myNumbers)); // output should be 80

// let myNumberss = [20, 50, 10, 60];
// console.log(myNumberss);

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[0];

// console.log(calc(10, myNumbers[0], myNumbers[1]));

// function showMessage(from, text) {
//   console.log(from + ": " + text);
// }

// showMessage("Ann"); // Ann: no text given

// // ========================

// function checkAge(age) {
//   if (age > 18) {
//     return "allowed";
//   } else {
//     return "Did parents allow you?";
//   }
// }

// let checkAge_nullish = (age) =>
//   age > 18 ? "allowed" : "Did parents allow you?";

// let checkAge_or = (age) => age > 18 || "Did parents allow you?";

// console.log(checkAge(10));
// console.log(checkAge_nullish(22));

// function fn() {
// 	fn();
// }

// fn();

// ====================================================

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

// function add7(num) {
//   return num + 7;
// }

// console.log(add7(3));

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiply(3, 5));

// =================================

// // Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

// function capitalize(str) {
// 	str0 = str[0];
// 	console.log(str0); // m
// 	strcap = str[0].toUpperCase();
// 	console.log(strcap); // M
// 	str[0] = str[0].toUpperCase();
// 	return str;
// }

// // Stays "mohamed" not "Mohamed" because strings are
// // immutable so you have to create a new string
// console.log(capitalize("mohamed"));

// ========================================

// function capitalize(str) {
//   newStr = str[0].toUpperCase() + str.substring(1, str.length);
//   return newStr;
// }
// console.log(capitalize("m"));

// ========================================

// function lastLetter(str) {
// 	return str[str.length - 1];
// }

// console.log(lastLetter("mohamed"));

// ========================================

// function fizzbuzz(numloop) {
// 	numloop = +numloop;
// 	for (let i = 1; i <= numloop; i++) {
// 		num = i;
// 		if (num % 3 === 0 && num % 5 === 0) {
// 			console.log(`fizzbuzz -> ${num}`);
// 		} else if (num % 3 === 0) {
// 			console.log(`fizz -> ${num}`);
// 		} else if (num % 5 === 0) {
// 			console.log(`buzz -> ${num}`);
// 		} else {
// 			console.log(`nothing -> ${num}`);
// 		}
// 	}
// }

// fizzbuzz(15);

// ========================================

const x = function (z) {
  let w = 0;
  z.forEach(function (q) {
    w += q;
  });
  return w;
};

console.log(x([2, 2, 2]));

// ========================================

const sumArray = function (array) {
  let sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
};

console.log(sumArray([2, 2, 2]));

// This line is a bit too long
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;
