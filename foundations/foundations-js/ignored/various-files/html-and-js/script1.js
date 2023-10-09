// const a = 5;
// const b = 10;

// function add() {
//   return c;
// }

// function print() {
//   add();
// }

// print();

let paragraph = document.getElementsByTagName("p");
console.log(paragraph);
console.log(typeof paragraph);
console.log(paragraph.length);
console.log(paragraph[0]);
console.log(paragraph[0].textContent);
console.log(paragraph[0].style);

let li = document.getElementsByTagName("li");
console.log(li);
console.log(li.length);
console.log(li[4].textContent);

let ol = document.getElementsByTagName("ol");
console.log(ol);
console.log(ol.length);
console.log(ol[0].textContent);
console.log(ol[0].innerHTML);
console.log(ol[0].outerHTML);
ol[1].innerHTML = "<li>test</li>";

let number = document.getElementById("number");
console.log(number);
number.textContent = "nothing";

console.log();

let querySelector = document.querySelector("p");
console.log(querySelector);
querySelector = document.querySelector("#parag2");
console.log(querySelector);
querySelector = document.querySelector(".parag");
console.log(querySelector);
let querySelectorAll = document.querySelectorAll("p");
console.log(querySelectorAll);
querySelectorAll = document.querySelectorAll(".parag");
console.log(querySelectorAll);

console.log(document.title);
console.log(document.body);
console.log(document.head);
console.log(document.forms);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].text);
console.log(document.links[0].href);

let link1 = document.querySelectorAll("a")[0];
// rick roll
link1.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
link1.text = "Click me";
link1.style.fontSize = "55px";
