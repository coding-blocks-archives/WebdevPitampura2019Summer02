// let num = document.getElementById('time')

var x =50
const count = setInterval(() =>{
    // num.innerText=x;
    console.log(x)
    x--;
},1000)


setTimeout(()=>{
    clearInterval(count)
},50000)