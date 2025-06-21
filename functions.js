/**
Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.
*/

console.log(this); //global obj (window)

this.name = "john";

const user = {
  name: "Ygor",
  greet: () => {
    console.log("Hello, " + this.name);
  },
  greetFuncExpr: function () {
    console.log("Hello, " + this.name);
  },
};

user.greet(); // "Hello, undefined"
user.greetFuncExpr(); // "Hello, undefined"

// const logArgs = () => {
//   console.log(arguments);
// };

// logArgs(1, 2, 3);

function logArgsExpr() {
  console.log(arguments); // [1, 2, 3]
}

logArgsExpr(1, 2, 3);

class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

// class Child extends Parent {
//   greet = () => {
//     super.greet(); // ❌ SyntaxError: 'super' keyword unexpected here
//   };
// }

class Child extends Parent {
  greet() {
    super.greet(); // ❌ SyntaxError: 'super' keyword unexpected here
  }
}

const child = new Child().greet();

// const Person = (name) => {
//     this.name = name;
//   };

//   const ygor = new Person("Ygor"); // ❌ TypeError: Person is not a constructor

function Person(name) {
  this.name = name;
}

const ygor = new Person("Ygor"); // ✅ Works
console.log(ygor.name); // "Ygor"

function* gen() {
  yield 1;
  yield 2;
}

const it = gen();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next());
