
let enteredValue = document.getElementById('inputBox')
let list = document.getElementById('list');
let str =""
function fizzbuzz() {
    let start = new Date().getTime();
    let num = enteredValue.value
    for (var i = 1; i < num; i++) {
        if(i%3==0 && i%5==0) str += `<li>Fizzbuzz</li>`
        else if(i%3==0) str += `<li>Fizz</li>`
        else if(i%5==0) str += `<li>Buzz</li>`
        else list.str+= `<li>${i}</li>`
    }

    list.innerHTML+=str

    let end = new Date().getTime();

    console.log(end-start)
  
}

