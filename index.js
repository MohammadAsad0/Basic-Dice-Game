var random1=Math.random() * 6;
random1=Math.floor(random1) + 1;

var imageName="images/dice"+random1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageName);


var random2=Math.random() * 6;
random2=Math.floor(random2) + 1;

imageName="images/dice"+random2+".png";

image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",imageName);


if(random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins.";
} else if(random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins. 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}


