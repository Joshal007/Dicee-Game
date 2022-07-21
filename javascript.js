var randomnumber1 = Math.floor(Math.random()*6)+1;

// if(randomnumber1==1){
//     document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice1.png");
// }
// else if(randomnumber1==2){
//     document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice2.png");
// }
// else if(randomnumber1==3){
//     document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice3.png");
// }
// else if(randomnumber1==4){
//     document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice4.png");
// }
// else if(randomnumber1==5){
//     document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice5.png");
// }
// else{
//     document.querySelectorAll(".dice img")[0].setAttribute("src","./images/dice6.png");
// }

var randomimage1 = "dice" + randomnumber1 + ".png";
var image1 = "images/"+randomimage1;
document.querySelectorAll(".dice img")[0].setAttribute("src",image1);

var randomnumber2 = Math.floor(Math.random()*6)+1;


if(randomnumber2==1){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice1.png");
}
else if(randomnumber2==2){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice2.png");
}
else if(randomnumber2==3){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice3.png");
}
else if(randomnumber2==4){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice4.png");
}
else if(randomnumber2==5){
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice5.png");
}
else{
    document.querySelectorAll(".dice img")[1].setAttribute("src","./images/dice6.png");
}

if(randomnumber1>randomnumber2){
    document.getElementById("title").innerHTML="Player 1 Wins!";
}
else if(randomnumber1==randomnumber2){
    document.getElementById("title").innerHTML="Draw!";
}
else{
    document.getElementById("title").innerHTML="Player 2 Wins!";
}
