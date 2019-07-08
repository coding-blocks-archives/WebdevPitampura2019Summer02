function mapReduce(arr, fn) {
    return arr.reduce((acc, item) => {
      return [...acc, fn(item)]
    }, [])
  }
  
  
  const input = [{
    name:'Divyansh',
    github_id:'silent-lad'
  },{
    name:'Abhishek',
    github_id:'abhishek97'
  },{
    name:'Dhruv',
    github_id:'imdhruvgupta'
  }]
  
  
  reduced = mapReduce(input, el => el.github_id)
  console.log(reduce)