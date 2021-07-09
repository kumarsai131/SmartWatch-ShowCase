var times = document.getElementById("time");

function clock(){
    var d = new Date();
    var hours =  d.getHours();
    var minutess = d.getMinutes();
    var seconds = d.getSeconds();
times.innerHTML = conversion(hours)+":"+conversion(minutess)+":"+conversion(seconds);
function conversion(x){
    if(x<10){
        x = '0' + x;
    }
    return x;
}
}
setInterval(clock,1000);
clock()

// ------------------------------------------------ 

var image = document.getElementById("img");

var btns = document.getElementsByClassName("btn");
console.log(document.getElementById("purple"))
document.getElementById("purple").addEventListener("click", function(){
        image.src = 'images/purple.png';
})
document.getElementById("red").addEventListener("click", function(){
    image.src = 'images/red.png';
})
document.getElementById("pink").addEventListener("click", function(){
    image.src = 'images/pink.png';
})
document.getElementById("black").addEventListener("click", function(){
    image.src = 'images/black.png';
})
document.getElementById("img").addEventListener("click", function(){
    image.src = 'images/blue.png';
})

// -----------------------------------------------------

console.log(document.querySelectorAll(".buttons1")[0])
document.querySelectorAll(".buttons1")[0].addEventListener("click",function(){
    document.getElementById("time").style.display="block";
    document.getElementById("heartbeat").style.display = "none";
})

document.querySelectorAll(".buttons1")[1].addEventListener("click",function(){
    document.getElementById("time").style.display="none";
    document.getElementById("heartbeat").style.display = "block";
})

// ------------------------------------------------------

var heart = document.querySelector(".fas");
console.log(heart.style.fontSize)
heart.style.fontSize="30px";

setInterval(function(){
    var font = parseInt(heart.style.fontSize);
    font = font>40 ? font-5 : font+5;
    heart.style.fontSize = font + "px";

},1000);