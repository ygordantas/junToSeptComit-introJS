// // regular flow
// // function deffer execution

// // control structure

// //conditional

// let isRaining = 0; // truthy {}, true, [], Date| falsy (0, NaN, undefined, null, "", false) => false
// let isSnowing = 2;

// if (isRaining) {
//   console.log("bring an umbrella");
// } else if (isSnowing) {
//   console.log("Bring a heavy jacket");
// } else {
//   console.log("Enjoy the sunshine");
// }

// const daysOfTheWeek = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// const currentDay = daysOfTheWeek[1];

// switch (currentDay) {
//   case daysOfTheWeek[0]: {
//     console.log("going to the park");
//     break;
//   }
//   case daysOfTheWeek[2]: {
//     console.log("COMIT Class");
//     break;
//   }
//   default: {
//     console.log("TBD");
//   }
// }

// // if (isRaining) {
// //   console.log("bring an umbrella");
// // }

// // if (isSnowing) {
// //   console.log("Bring a heavy jacket");
// // } else {
// //   console.log("Enjoy the sunshine");
// // }

// // loops

// const myHobbies = ["football", "swimming", "eating pizza"]; // length 3

// // myHobbies.forEach((i) => console.log(i));

// // for (let counter = 0; counter < 10; counter++) {
// //   if (counter === 2) {
// //     break;
// //   }
// //   console.log(counter);
// // }

// // infinity loop

// let counter = 6;

// while (counter < 5) {
//   console.log(counter);
//   counter++;
// }

// // NaN // FALSY
// // piece of code to be used at Least once
// // let userAge;
// // do {
// //   userAge = Number(prompt("What's your age?")) || 0;
// // } while (userAge < 18);

// for (const hobbie of myHobbies) {
//   console.log(hobbie);
// }

const person = {
  name: "ygor",
  age: 32,
};

for (const property in person) {
  console.log("Key: " + property);
  console.log("Value: " + person[property]);
}
