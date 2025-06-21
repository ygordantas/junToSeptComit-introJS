function countDown(startingCount) {
  // condition for stopping (Base case)
  if (startingCount <= 0) {
    return 0;
  }

  startingCount--;
  console.log(startingCount);

  countDown(startingCount);
}

countDown(10);

//Without base cases, a recursive function won't know when to stop, resulting in an infinite recursion (error).

function fibonacci(n) {
  if (n <= 1) return 0;
  if (n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));

// fibonacci(1) => 0
// fibonacci(2) => 1
// fibonacci(3) => fibonacci(2) + fibonacci(1) => 1 + 0 = 1
// fibonacci(4) => fibonacci(3) + fibonacci(2) => 1 + 1 = 2
// fibonacci(5) => fibonacci(4) + fibonacci(3) => 2 + 1 = 3
