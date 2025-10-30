const fruits = ["apple", "banana", "mango", "orange"];
const search = "apple";

// if (fruits.includes(search)) {
//   console.log("Found!");
// } else {
//   console.log("Not found!");
// }


for (let i = 0; i < fruits.length; i++) {
if (search == fruits[i]) {
  console.log(search,"at index",i)
  break
} 
if (search != fruits[i]) {
  console.log(search,"is not availeble in this list")
  break
} 
}
