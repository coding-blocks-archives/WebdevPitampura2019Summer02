var arr=[{
  name:'Divyansh',
  github_id:'silent-lad'
},{
  name:'Abhishek',
  github_id:'abhishek97'
},{
  name:'Dhruv',
  github_id:'imdhruvgupta'
}]
arr1 = arr.map((item) => item.github_id)
console.log("Given array:" , arr)
console.log("Array with github IDs: ",arr1)