let inputBox = document.getElementById('inputBox')
let list = document.getElementById('list')


function doFunction() {
    let start = new Date().getTime()

    let num = inputBox.value;
    let str = "";
    for(var i=1; i<=num; i++)
    {
        if(i%3 == 0 && i%5==0) str += `<li>FizzBuzz</li>`;
        else if(i%3==0) str += `<li>Fizz</li>`
        else if(i%5==0) str += `<li>Buzz</li>`
        else str += `<li>${i}</li>`
    }

    list.innerHTML +=str

    let end = new Date().getTime()
    console.log(end-start);
}