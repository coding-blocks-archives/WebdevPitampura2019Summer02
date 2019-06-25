arr=[1,2,1,3,4,2,1];
removeDupli(arr);

function removeDupli(arr){
    output=[];var j=0;
    for(i=0;i<arr.length;i++){
        isUnique=true;
        for(k=0;k<i;k++){
            if(arr[k]===arr[i]){
                isUnique=false;
                break;
            }  
        }
        if(isUnique){
            output[j]=arr[i];
            j++; 
        }
    }
    console.log(output);
}