let arr=[7,1,4,6,9,8,40,7,7,2];

let max=arr.reduce((acum,item)=> {
    if(acum<item){
        acum=item;
    }
    return acum;
})

console.log(max);
