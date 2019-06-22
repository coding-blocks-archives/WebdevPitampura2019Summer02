function primeNos () {
    var n = parseInt(document.getElementById('primeinput').value)
    var arr = new Array(n+1)
    var result = ""
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
            result = result + " " + b
    }

    console.log(result)
}


function removeDuplicates(){
    var size = prompt("Enter the number of elements in array")
    var arr = new Array(size)
    for(let i = 0;i < size ; i++)
        arr[i] = prompt("Enter the value")

    var s = new Set(arr)

    result = ""
    s.forEach((item , index) => {
        result = result + " " + item
    });


    console.log(result)
}