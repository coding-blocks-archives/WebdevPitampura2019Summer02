//TASK 1:
console.log("TASK 1")
var arr = [1,2,3,3,2]
console.log("Original Array:" + "[" + arr + "]")
function removeDup(){
        len = arr.length
     var arr1 = []
    for (i=0;i<len;i++){
        if (arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i])
        }        
    }
    console.log("Unique array: " + "[" + arr1 + "]")
}
arr.filter(removeDup)
console.log(" ")

// TASK 2:
 var arr = [2,4,1,6,8]
 console.log("TASK 2 ")
 console.log("Original Array:" + "[" + arr + "]")
x = arr.reduce(function ismax(a,b) {return Math.max(a,b)})
console.log("Maximum element in the array :" + x)
console.log(" ") 

// TASK 3:
var arr = ['Music', 'Songs','Guitar','Flute','Band','Drums']
console.log("TASK 3" )
console.log("Array:" ) ; console.log(arr)
function minlength(){  
  len= arr.length
  min= arr[0].length        
  mini= arr[0]
    for (i = 0 ;i<len; i++) {       
        if (min > arr[i].length) {min = arr[i].length
        mini= arr[i]
        }         
    }
    console.log("Element of minimum length:" + mini)
}
arr.forEach(minlength);  
console.log(" ")

//TASK 4:
var obj = [{
    name:'Divyansh',
    github_id:'silent-lad'
  },{
    name:'Abhishek',
    github_id:'abhishek97'
  },{
    name:'Dhruv',
    github_id:'imdhruvgupta'
  }]
var resarr = []
for (i=0; i< obj.length; i++) {
    resarr.push(obj[i].github_id)
}
console.log("TASK 4")
console.log("Resultant Array: "  )
console.log(resarr)  














