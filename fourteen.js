const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr.filter((elem) => {
    return elem%2==0
})
console.log(newArr);