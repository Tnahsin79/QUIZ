var link="https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple";

async function question(){
    try{
    var data=await fetch(link);
    data=await data.json();
    console.log(data);
    structure();
    display(data.results)
    }
    catch(error){
        console.log(error);
    }
}

question();
//export{score};
function structure(){

    var bar1=document.createElement("div");
    bar1.setAttribute("class","bar1");
    var p1=document.createElement("p");
    p1.setAttribute("id","progressText");
    bar1.appendChild(p1);
    var p2=document.createElement("p");
    p2.setAttribute("id","scoreText");
    bar1.appendChild(p2);


var div=document.createElement("div");
div.setAttribute("class","container div1");
div.appendChild(bar1);

var ques=document.createElement("p");
ques.setAttribute("id","question");
div.appendChild(ques);

var option1=document.createElement("div");
var btn1=document.createElement("btn");
btn1.setAttribute("id","btn1");
btn1.setAttribute("class","choice-text btn btn-primary");
btn1.setAttribute("onclick","checka('btn1')");
div.appendChild(option1);
option1.appendChild(btn1);

var option2=document.createElement("div");
var btn2=document.createElement("btn");
btn2.setAttribute("id","btn2");
btn2.setAttribute("class","choice-text btn btn-primary");
btn2.setAttribute("onclick","checkb('btn2')");
div.appendChild(option2);
option2.appendChild(btn2);

var option3=document.createElement("div");
var btn3=document.createElement("btn");
btn3.setAttribute("id","btn3");
btn3.setAttribute("class","choice-text btn btn-primary");
btn3.setAttribute("onclick","checkc('btn3')");
div.appendChild(option3);
option3.appendChild(btn3);

var option4=document.createElement("div");
var btn4=document.createElement("btn");
btn4.setAttribute("id","btn4");
btn4.setAttribute("class","choice-text btn btn-primary");
btn4.setAttribute("onclick","checkd('btn4')");
div.appendChild(option4);
option4.appendChild(btn4);

document.body.appendChild(div);
}

var i=0,score=0;

var correct,database;
function display(result)
{
    document.getElementById("scoreText").innerText="Score: "+score;
    if(i===10)
    {
        //export{score};
        localStorage.setItem("score", score);
        var queryString = "?score=" +score;
        window.location.href = "end.html" + queryString;
    }
    database=result;
    var ques=result[i].question;
    var answer=result[i].correct_answer;
    var wrong=result[i].incorrect_answers;
    correct=answer;
    document.getElementById("progressText").innerText="Question "+(i+1)+"/10";
    document.getElementById("question").innerText=ques;
    document.getElementById("btn1").innerText=answer;
    document.getElementById("btn2").innerText=wrong[0];
    document.getElementById("btn3").innerText=wrong[1];
    document.getElementById("btn4").innerText=wrong[2];
    console.log(ques);
    console.log(answer);
}

function checka(id){
    if(document.getElementById(id).innerText===correct)
    score=score+10;
    console.log("score= "+score);
    i++;
    display(database);
}

function checkb(id){
    if(document.getElementById(id).innerText===correct)
    score=score+10;
    console.log("score= "+score);
    i++;
    display(database);
}

function checkc(id){
    if(document.getElementById(id).innerText===correct)
    score=score+10;
    console.log("score= "+score);
    i++;
    display(database);
}

function checkd(id){
    if(document.getElementById(id).innerText===correct)
    score=score+10;
    console.log("score= "+score);
    i++;
    display(database);
}