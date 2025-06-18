// values: string,
// numbers (integers, floats), booleans(true, false), undefined, null primitive types

//camelCase styling
// let x const
// type safety (js loosely type language)

// const age = prompt("What's your age?");

// document.getElementById("userInputEntry").innerText = age;

// let age = "32";
// let age2 = age;
// age2 = age2 + "hi";

// console.log(age);
// console.log(age2);

//reference type values

//objects and arrays, function, sets

function sum(numb1, numb2) {
  console.log(numb1 + numb2);
}

const person = {
  name: "Ygor",
  age: 32,
  address: {
    number: 123,
    streetName: "Main St",
  },
}; // 0x0032 location

//Deep copy
const person2 = person;

// person2.name = "Bibu";

console.log(person === person2); // ?
console.log(person); // name: Ygor
console.log(person2); // name: Bibu

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person3 = new Person("Ygor", 32);
// const person4 = new Person("Bibu", 22);

// person3.address = "hello";

// console.log(person3);
// console.log(person4);

// Array (lists)

//inetrate
//add an item to the end
// get first element

/* const objArr = {
    0: "soccer",
    1: "eating out",
    2: "hahah"
 }
*/

const myHobbies = ["soccer", "eating out", "hahaha"];

const myNewArray = [...myHobbies];

myNewArray[2] = "changed";

console.log(myHobbies); //["soccer", "eating out", "hahaha"];
console.log(myNewArray); //["soccer", "eating out", "changed"];

const numbers = [1, 3, 7, 13, 96, -5, 32];

sum(3, 6);
sum(2, 1);
sum(1, 3);
sum(2, 8);
sum(3, 6);
