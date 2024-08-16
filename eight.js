//? Sum of all elements in an array
const arr = [1,2,3,4,5]
let sum = 0

///foreach 
// arr.forEach((val) => {
//     sum += val
// })

///forof
for (const val in arr) {
    sum += arr[val]
}
console.log(sum);
