var div=document.createElement("div");
div.setAttribute("class","container");
var title=document.createElement("h3");
title.innerText="Quick Quiz";
var play=document.createElement("btn");
play.setAttribute("class","btn btn-primary");
play.innerText="Play";
play.setAttribute("onclick","playgame()")
var br=document.createElement("br");
var hs=document.createElement("btn");
hs.innerText="High Scores";
hs.setAttribute("onclick","highscores()")
hs.setAttribute("class","btn btn-primary");

div.appendChild(title);
div.appendChild(play);
div.appendChild(br);
div.appendChild(hs);
document.body.appendChild(div);

function playgame(){
    window.location.href = "game.html";
}
function highscores(){
    window.location.href = "highscores.html";
}