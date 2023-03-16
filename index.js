var randomNumber1 = 1 + Math.floor(Math.random()*6);
var imgNo1= "dice"+randomNumber1+".png";
var randomNumber2 = 1 + Math.floor(Math.random()*6);
var imgNo2 = "dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imgNo1);
document.querySelector(".img2").setAttribute("src",imgNo2);
document.querySelector("h1").textContent= (imgNo1 > imgNo2) ? "🚩Player 1 Wins!" : (imgNo1 === imgNo2) ? "Draw!":"Player 2 Wins! 🚩"
