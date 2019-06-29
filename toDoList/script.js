function addTask(){
    var inputText = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value=""
    document.getElementById("list").innerHTML+= "<li onClick='strike(this)' class='plainText'>"+inputText+"</li>"
}

function strike(id){
    if(id.className=="strikeText"){
        id.setAttribute("class","plainText")
    }else{
        id.setAttribute("class","strikeText" )
    }
}

function clearTasks(){
    var done = document.getElementsByClassName('strikeText');   
    console.log(done);
    for(var i=0; i<done.length; i++){
        done[i].style.display = 'none';
   }
}