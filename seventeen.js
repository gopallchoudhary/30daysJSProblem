// const arr = [3,5,3,2,6,7,34,734,4331,7,5,34,5,23,5]
// const newArr = arr.filter((val) => {
//     return val!==5
// })
// console.log(newArr);

function removeElement(arr, target) {
    return arr.filter((item) => item !==target)
}

const arr = [1,5,4,5,66,6,5]
const target = 5
console.log(removeElement(arr, target));

