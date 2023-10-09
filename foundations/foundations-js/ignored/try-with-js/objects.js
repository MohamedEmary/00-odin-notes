let user = {
  // Properties
  name: "mohamed",
  age: 22,
  gender: "male",
  // you can use spaces in property name but you have to use bracket notation to access it
  "user country": "Egypt",
  // Methods
  getData: () =>
    `My name is ${user.name}, I'm ${user.gender}, and I'm ${user.age} yo`,
  familyMembers: {
    father: "ahmed",
    mother: "fatma",
    brothers: {
      one: "ali",
      two: "omar",
    },
    sister: "sara",
  },
  skills: ["html", "css", "js"],
};

let variable = "name";

console.log(user);
console.table(user);
console.log(user.getData());
console.log(user["user country"]);
console.log(user.variable); // undefined
console.log(user[variable]);

console.log(user.familyMembers);
console.log(user.familyMembers.brothers);
console.log(user["familyMembers"]["brothers"].one);
console.log(user.familyMembers.brothers.one);

console.log("typeof this: " + typeof this);
console.log("typeof user: " + typeof user);
console.log(typeof this === typeof user);
