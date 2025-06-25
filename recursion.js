//10
export function countDown(startingCount) {
  console.log(startingCount);

  // base case (condition to exit the recursion)
  if (startingCount <= 0) {
    return 0;
  }

  startingCount--;

  countDown(startingCount); //9
}

// countDown(10);

// Create a function to determine what's the value of nth item in
// a fibonacci sequence

// 0,1,1,2,3,5,8...
// function(n) n = 4 => 2
// you gotta use recursion (NO LOOPS ALLOWED)

//
export function fibonacci(n) {
  // base case
  if (n <= 1) return 0;
  if (n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));

// fibonacci(1) = 0
// fibonacci(2) = 1
// fibonacci(3) => fibonacci(2) + fibonacci(1) => 1 + 0 = 1
// fibonacci(4) => fibonacci(3) + fibonacci(2) => 1 + 1 = 2
// fibonacci(5) => fibonacci(4) + fibonacci(3) => 2 + 1 = 3

export default "ABC";
