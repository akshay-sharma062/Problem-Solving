const arr = [10, 5, 30, 2, 50];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Greatest:", max);
console.log("Smallest:", min);
