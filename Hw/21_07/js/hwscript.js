// var t = 0
// var result = ''
function primeNos () {
    var n = parseInt(document.getElementById('primeinput').value)
    var arr = new Array(n+1)
    var result = "Prime numbers upto "+n+" are "
    document.getElementById("output").innerHTML = ""
    for(let i = 1 ; i <= n ; i++)
        arr[i] = true

    for(let j = 2 ; j*j <= n ; j++){
        if(arr[j] == true){
            for(let a = j*j ; a <= n; a += j)
                arr[a] = false
        }
    }

    for(let b=2;b<=n;b++){
        if(arr[b] == true)
            result = result + " " + b +","
    }

    var t = 0
    function typingeffect() {
        if (t < result.length-1) {
            document.getElementById("output").innerHTML += result.charAt(t);
            t++;
            setTimeout(typingeffect, 100);
        }
    }
    
    typingeffect()
    console.log(result)
}


function removeDuplicates(){
    var size = parseInt(document.getElementById('size').value)
    var arr = new Array(size)
    document.getElementById("outputdup").innerHTML = ""
    for(let i = 0;i < size ; i++)
    {
        arr[i] = prompt("Enter the element")
    }

    var s = new Set(arr)

    var result = "Array after removing duplicates is "
    s.forEach((item , index) => {
        result = result + " " + item + ","
    });

    var t = 0
    function typingeffectdup() {
        if (t < result.length-1) {
            document.getElementById("outputdup").innerHTML += result.charAt(t);
            t++;
            setTimeout(typingeffectdup, 100);
        }
    }
    
    typingeffectdup()
    console.log(result)
}


// function typingeffect(result, id){

//     if (t < result.length-1) {
//         document.getElementById(id).innerHTML += result.charAt(t);
//         t++;
//         setTimeout(typingeffect, 100);
//     }
// }