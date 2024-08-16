const para = document.getElementById("myPara")

setTimeout(() => {
    para.textContent = "This is the  changed paragaraph"
    console.log(para);
}, 2000);