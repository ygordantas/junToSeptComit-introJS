// Explain the diffs between function expressions vs arrow functions
// Arrow functions DON'T have their own bindings to
// THIS, ARGUMENTS, SUPER

//arrow function use the THIS from it's parent!
// name = "Window name";

// const user = {
//   name: "Ygor",
//   //   greet: () => console.log(`Hello, I am ${this.name}`),
//   greet: function () {
//     const myFunc = () => console.log(`Hello, I am ${this.name}`);
//     myFunc();
//   },
//   // greet: () => console.log("Hello, I am " + name)
// };

// user.greet();

// function myFunc() {
//   console.log(arguments);
// }

// const myFunc = () => {
//   console.log(arguments);
// };

// myFunc(1, 2, 3, "a");

// class Parent {
//   greet = () => {
//     console.log("From parent");
//   };
// }

// class Child extends Parent {
//   greet = () => {
//     super.greet();
//   };
// }

// const child = new Child();

// child.greet();

// function Person(name) {
//   this.name = name;
// }

// const Person = (name) => {
//   this.name = name;
// };

// const user = new Person("Ygor");

// console.log(user.name);

// function* gen() {
//   yield 1;
//   yield 2;
// }

// const iterator = gen();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
