// function typingeffect() {
//     txt = "Welcome to the world of Home Work ......"
//     for (var i = 0;i < txt.length; i++) {
//       document.getElementById("text").innerHTML += txt.charAt(i);
//       setTimeout(typingeffect, 50);
//     }
//   }




var i = 0;
var txt = 'Hey! I hope you are here to see my homework........';
function typingeffect() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingeffect, 100);
    }
    document.getElementById('link').style.visibility = "visible";
}
