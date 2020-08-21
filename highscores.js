var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var name=queries[0];
var score=queries[1];
var string=name+"- "+score;
console.log(name+"- "+score);

var scorename=localStorage.getItem("name");
namescore=localStorage.getItem(scorename);
/*if(names!==null)
{
var names=names.split(",");
var scores=[];
for(var i=0;i<names.length;i++)
{
    scores[i]=parseInt(localStorage.getItem(names[i]));
}
sort();
}*/

var div=document.createElement("div");
div.setAttribute("class","container div1");

var highscore=document.createElement("h3");
highscore.innerText="High Scores";

var p=document.createElement("p");
if(score===undefined)
p.innerText="No New Highscore";
else
{
    p.innerText=string;
    //display();
}

var gohom=document.createElement("button");
gohom.setAttribute("class","btn");
gohom.setAttribute("id","goHome");
gohom.innerText="Go home";
gohom.setAttribute("onclick","go()");

div.appendChild(highscore);
div.appendChild(p);
div.appendChild(gohom);
//if(names!==null)
display();
document.body.appendChild(div);

function display()
{
    //for(var i=0;i<score.length;i++)
    {
        var p=document.createElement("p");
        p.innerText=scorename+"- "+namescore;
        div.appendChild(p);
    }
}

function go(){
    window.location.href = "index.html";
    //location.replace("index.html")
}

/*function sort(){
    var t;
    for(var i=0;i<names.length;i++)
    {
        for(var j=i+1;j<names.length;j++)
        {
            if(score[i]<score[j])
            {
                t=score[i];
                score[i]=score[j];
                score[j]=t;
                t=name[i];
                name[i]=name[j];
                name[j]=t;
            }
        }
    }
}*/