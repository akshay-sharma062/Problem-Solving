function sum(n) {
    if (n === 0) return 0;   // base case
    return n + sum(n - 1);   // recursive call
  }
  
  let n = 5;
  console.log("Sum =", sum(n)); // Output: 15
  