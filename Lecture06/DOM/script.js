let para = document.getElementById('para');
let link = document.getElementById('link');
let list = document.getElementById('list')

para.innerText += " Dhruv";

link.innerText = "Welcome to Coding Blocks"
link.setAttribute('href', 'https://codingblocks.com/')

let item = document.createElement('li');
item.innerHTML = 2;

list.appendChild(item)
