// var f2
// function f1 (i) {
//     var string = ""
//     for (var z = 0; z < i; z++)
//         string += z

//     console.log(string)
// }

// f1(10)

function f1 (i, blah) {
    var string = ""
    for (var z = 0; z < i; z++) {
        // string += z
        blah(string)
    }

    
}


// f1(10, function (str) {
//     window.alert(str)
// })


f1(10, function (str) {
    window.alert("Bye")
})
