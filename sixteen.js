const arr = [1,2,3,5,4,6,7,8,9,10,789,767,885,58]

const newArr = arr.reduce((acc, val) => {
    return val > acc ? val : acc
}, 0)
console.log(newArr);


