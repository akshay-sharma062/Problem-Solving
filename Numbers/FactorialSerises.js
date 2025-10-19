let n;
let fact = 1 ;

function Factorial(n) {
    
    for (let i = 1; i <=n ; i++) {
        fact *= i
    }
    console.log(fact)
}
Factorial(6)