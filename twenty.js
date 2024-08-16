const factorial = (num) => {
    let factorial = 1 
    for(let i = num; i>=1; i--) {
        factorial *=num
        num--
    }
    console.log(factorial);
    
}

factorial(7)