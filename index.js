var color=["green","red","yellow","blue"];
var seq=[];
var userSeq=[];
var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        started=true;
        nextSeq();
    }
})

$(".b").click(function(){
    var clicked=$(this).attr("id");
    if(started){
        userSeq.push(color[clicked]);
        playAudio(clicked);
        animate(clicked);
        setTimeout(function(){
            checkUser();
        },1000)
    }
    else{
        animate(clicked);
        playAudio(5);
        $("body").css("backgroundColor","red");
        setTimeout(function(){
            $("body").css("backgroundColor","#011F3F");
        },100);
    }
})

function checkUser(){
    var idx=userSeq.length-1;
    if(userSeq[idx]===seq[idx]){
        console.log("success");
        if((idx+1)==seq.length){
            level++;
            $("h1").text("level "+level);
            nextSeq();
        }
    }
    else{
        console.log("wrong");
        playAudio(5);
        $("body").css("backgroundColor","red");
        setTimeout(function(){
            $("body").css("backgroundColor","#011F3F");
        },100);
        seq=[];
        userSeq=[];
        started=false;
        level=0;
        $("h1").text("Game Over!! , Press Any key to start");
    }
}

function nextSeq(){
    userSeq=[];
    var x=Math.floor(Math.random()*4);
    seq.push(color[x]);
    $("h1").text("level "+level);
    console.log(seq);
    playAudio(x);
    $("#"+x).fadeIn(200).fadeOut(200).fadeIn(200);

}

function animate(key){
    $("#"+key).addClass("ani");
    setTimeout(function(){
        $("#"+key).removeClass("ani");
    },100);
}
function playAudio(key){
    if(key==0){
        var music=new Audio("sounds/green.mp3");
        music.play();
    }
    else if(key==1){
        var music=new Audio("sounds/red.mp3");
        music.play();
    }
    else if(key==2){
        var music=new Audio("sounds/yellow.mp3");
        music.play();
    }
    else if(key==3){
        var music=new Audio("sounds/blue.mp3");
        music.play();
    }
    else{
        var music=new Audio("sounds/wrong.mp3");
        music.play();
    }
}