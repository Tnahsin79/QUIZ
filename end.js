
/*var highscore=[];
localStorage.setItem("data", JSON.stringify(highscore));*/

var score=localStorage.getItem("score");
console.log(typeof(score),score);

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var x=queries[0];
console.log(x);
x=x.split("=");
x=+x[1];
console.log(typeof(x),x);

var div=document.createElement("div");
div.setAttribute("class","container");

var result=document.createElement("h3");
result.innerText=score;

var username=document.createElement("input");
username.setAttribute("id","username");

var br1=document.createElement("br");

var save=document.createElement("button");
save.innerText="Save";
save.setAttribute("id","saveScoreBtn");
save.setAttribute("class","btn");
save.setAttribute("onclick","savescore()");
/*var test=document.getElementById("saveScoreBtn");
test.addEventListener("mouseover", function( event ) {   
    if (username.value.length === 0 )
    {
    document.getElementById("saveScoreBtn").disabled = true;
    }
    else
    {
    document.getElementById("saveScoreBtn").disabled = false;
    }
}, false);*/
var br2=document.createElement("br");

var playagain=document.createElement("button");
playagain.innerText="Play Again";
playagain.setAttribute("id","playAgain");
playagain.setAttribute("class","btn");
playagain.setAttribute("onclick","again()");

var br3=document.createElement("br");

var gohome=document.createElement("button");
gohome.innerText="Go Home";
gohome.setAttribute("id","goHome");
gohome.setAttribute("class","btn");
gohome.setAttribute("onclick","home()");

div.appendChild(result);
div.appendChild(username);
div.appendChild(br1);
div.appendChild(save);
div.appendChild(br2)
div.appendChild(playagain);
div.appendChild(br3)
div.appendChild(gohome);
document.body.appendChild(div);

function home(){
    location.replace("index.html");
}
function again(){
    location.replace("game.html");
}
async function savescore(){
    try{
        if(document.getElementById("username").value.length>0)
        {
        var name=document.getElementById("username").value;
        localStorage.setItem(name,x);
        var queryString = "?" + name + "&" + score;
        window.location.href = "highscores.html" + queryString;
        }
    }
    catch(error){
        console.log(error);
    }
    
}