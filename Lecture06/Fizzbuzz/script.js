let inputBox = document.getElementById('inputBox')
let list = document.getElementById('list')


function doFunction() {
    let start = new Date().getTime()
    
    let num = inputBox.value;

    for(var i=1; i<=num; i++)
    {
        if(i%3 == 0 && i%5==0) list.innerHTML += `<li>FizzBuzz</li>`;
        else if(i%3==0) list.innerHTML += `<li>Fizz</li>`
        else if(i%5==0) list.innerHTML += `<li>Buzz</li>`
        else list.innerHTML += `<li>${i}</li>`
    }

    let end = new Date().getTime()
    console.log(end-start);
}