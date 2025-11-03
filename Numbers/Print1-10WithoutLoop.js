function printNum(i,num) {
    if (i>=num) {
        console.log(i)
        return
    }
    console.log(i)
    printNum(i+1,num)
 
    
}
printNum(1,10)