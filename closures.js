// The word lexical refers to the fact that lexical scoping uses the location where a variable is declared
// within the source code to determine where that variable is available.
//
// JavaScript uses lexical scoping,
// so functions are executed using the variable scope that was in place when the function was defined, not when it’s called.

/*
A closure is the combination of a function and the lexical environment within which that function was declared. 
This environment consists of any variables that were in-scope at the time the closure was created.
 */

function createCounter() {
  let counter = 0;

  function increment() {
    return counter++;
  }

  function decrement() {
    return counter--;
  }

  function getCurrentCount() {
    return counter;
  }

  return {
    increment,
    decrement,
    getCurrentCount,
  };
}

const counter = createCounter();

counter.increment();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCurrentCount());

const counter2 = createCounter();

console.log(counter2.increment());

// it is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task,
// as it will negatively affect script performance both in terms of processing speed and memory consumption.
