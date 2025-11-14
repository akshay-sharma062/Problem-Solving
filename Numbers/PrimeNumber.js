function PrimeNumber(num) {

    count = 0;
if(num== 1 || num == 2){
    console.log(num,"is an prime number")
    return
}
if (num== 0 ){
    console.log("plese use an valid no.")
}

for (let i = 2; i < num; i++) {
    if( num/i){
        count++;
    }
}
if (count > 2) {
    console.log(num,"Is Not an prime No.")
   
} else {
    console.log(num,"Is an prime No.")  
}
    
}

let num;
PrimeNumber(1)