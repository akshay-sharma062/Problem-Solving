// function printAlphabet(ch) {
//     if (ch === 'Z') {        // Base condition: stop after printing Z
//         console.log(ch);
//         return;
//     }
    
//     console.log(ch);          // Print current character
    
//     // Move to next character using Unicode value manually
//     let nextChar = String.fromCharCode(ch.charCodeAt(0) + 1);
//     printAlphabet(nextChar);  // Recursive call
// }

// printAlphabet('A');

// 1-10 without loops


function printNum(i,num) {
    if (i>=num) {
        console.log(i)
        return
    }
    console.log(i)
    printNum(i+1,num)
 
    
}
printNum(1,10)
