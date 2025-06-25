// Closures
// lexical scoping: When function get executed they have access to
// variables that were defined inside the parent function (scope)

// code encapsulation
function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
  }

  function decrement() {
    counter--;
  }

  function getCurrentCounter() {
    return counter;
  }

  return {
    increment,
    decrement,
    getCurrentCounter,
  };
}

const counter = createCounter();

counter.increment();
counter.increment();

const counter2 = createCounter();
counter2.increment();

// console.log(counter.getCurrentCounter()); //2
// console.log(counter2.getCurrentCounter()); //1
