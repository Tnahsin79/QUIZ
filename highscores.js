var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var name=queries[0];
var score=queries[1];
var string=name+"- "+score;
console.log(name+"- "+score);

var div=document.createElement("div");
div.setAttribute("class","container div1");

var highscore=document.createElement("h3");
highscore.innerText="High Scores";

var p=document.createElement("p");
if(score===undefined)
p.innerText="No New Highscore";
else
p.innerText=string;

var gohom=document.createElement("button");
gohom.setAttribute("class","btn");
gohom.setAttribute("id","goHome");
gohom.innerText="Go home";
gohom.setAttribute("onclick","go()");

div.appendChild(highscore);
div.appendChild(p);
div.appendChild(gohom);
document.body.appendChild(div);

function go(){
    window.location.href = "index.html";
    //location.replace("index.html")
}