// const reversedString = (str) =>  {
//     let st = str
//     let len = str.length
//     let save = ""
//     for(let i = len-1; i>=0; i--) {
//         save += st[i]
//     }
// console.log(save);
// }

// reversedString("GOPAL")

const reversedString = (str) => {
    console.log(str.split("").reverse().join(""));
    
}
//! split => makes an array 
//! reverse => reverse the order of an array 
//! join => joins tha array & makes element according to the user

reversedString("Gopal Choudhary")
