let para =document.getElementById('para');
let link=document.getElementById('link');
let para2=document.getElementById('para2');
let list=document.getElementById('list');
para.innerText="Hello Yash"
link.innerText="welcome to google"
let item=document.createElement('li');
item.innerHTML=1;
list.appendChild(item);
para.innerText+="world"
link.setAttribute("href","https://www.google.com")