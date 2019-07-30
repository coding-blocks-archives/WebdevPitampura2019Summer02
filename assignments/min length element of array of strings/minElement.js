let arr=['one','two','three','four','five','six','na'];

let str=arr[0];

arr.forEach(item => {if(str.length>item.length)str=item;});

console.log(str);
