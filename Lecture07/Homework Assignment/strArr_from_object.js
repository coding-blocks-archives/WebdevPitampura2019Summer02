//  Goal : To retrieve all the github_id from given array of object and print the string

let input  = [{
    name:'Divyansh',
    github_id:'silent-lad'
  },{
    name:'Abhishek',
    github_id:'abhishek97'
  },{
    name:'Dhruv',
    github_id:'imdhruvgupta'
  },{
      name:'Shaurya',
      github_id : 'jugshaurya'
  }
]

  
// Resultant Array ->sample output
//   ['silent-lad','abhishek97','imdhruvgupta','jugshaurya']

let ans = []
input.forEach(function (item){
    ans.push(item.github_id)
})
console.log(ans)
