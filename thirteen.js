// const randomNumber = Math.floor(Math.random()*10+1)
// console.log(randomNumber);

const randomNumber = (min, max) => {
    return Math.floor(Math.random()*(min+1)+(max/2))
}

console.log(randomNumber(50, 100));