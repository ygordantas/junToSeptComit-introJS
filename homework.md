## 🧮 Multiplier Factory

Write a function `createMultiplier` that takes a number `factor` and returns a new function.  
That function should take another number and return it multiplied by the factor.

### 📝 Requirements:

- Use a closure to capture the `factor`
- The returned function should accept one argument
- Do not use global variables

### ✅ Example:

```js
const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15

const half = createMultiplier(0.5);
console.log(half(10)); // 5
```

## 💡Once Function

Write a function `once(fn)` that takes a function `fn` and returns a new function.  
The returned function should call `fn` **only once**, no matter how many times it's invoked.  
After the first call, all subsequent calls should return `undefined` and not invoke `fn`.

---

### 📝 Requirements

- Use a **closure** to keep track of whether `fn` has already been called.
- The returned function should:
  - Call `fn` only on the first invocation.
  - Ignore or return `undefined` on all future calls.
- The original `fn` may take **any number of arguments**.

---

### ✅ Example

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

const greetOnce = once(greet);

greetOnce("Ygor"); // Output: Hello, Ygor!
greetOnce("John"); // No output
greetOnce("Jane"); // No output
```

## 🧮 Exercise 1: Factorial

These exercises will help you understand and master **recursion** in JavaScript — solving problems by having a function call itself.

### ✅ Instructions

- Do not use loops (`for`, `while`, etc.)
- Each solution must use **pure recursion**
- Focus on defining a **base case** and a **recursive case**
- Use `console.log()` to test your results

---

Write a function `factorial(n)` that returns the factorial of `n`.

> The factorial of `n` is `n * (n-1) * (n-2) * ... * 1`  
> Example: `factorial(5)` should return `120`

### Example:

```js
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
```
