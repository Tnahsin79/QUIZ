var div=document.createElement("div");
div.setAttribute("class","container");
var title=document.createElement("h3");
title.innerText="Quick Quiz";
var play=document.createElement("btn");
play.setAttribute("class","btn btn-primary");
play.innerText="Play";
var br=document.createElement("br");
var hs=document.createElement("btn");
hs.innerText="High Scores";
hs.setAttribute("class","btn btn-primary");

div.appendChild(title);
div.appendChild(play);
div.appendChild(br);
div.appendChild(hs);
document.body.appendChild(div);