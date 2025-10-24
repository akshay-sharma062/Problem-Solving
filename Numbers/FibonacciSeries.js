// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let n ;

function Fibonaci(n) {
    let curr;
let a = 0
let b = 1 ;
for (let i = 0; i < n; i++) {
    
    console.log(a)
    curr = a+b
    a = b
    b = curr
   
}
}


Fibonaci(10)
