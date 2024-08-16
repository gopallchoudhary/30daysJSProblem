function createCounter() {
    let count = 0
    return function() {
        return ++count
    }
}

const counter =  createCounter()

for(let i = 5; i>0; i--) {
    console.log(counter())
    
}


