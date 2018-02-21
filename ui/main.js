console.log('Loaded!');


var element = document.getElementById('main-text');
element.innerHTML="Hi, I am Rohan..This is My First WebApp.. :) :)";

var img = document.getElementById('madi');
marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function() {
    var interval=setInterval(moveRight, 50);
};