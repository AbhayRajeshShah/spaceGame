//canvas
var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var scoreText = document.getElementById("score");
let gameOverText = document.getElementById("scoree");
let restart = document.getElementById("restart");
let gameOver = document.querySelector(".gameOver");
let high = document.getElementById("highscore")
var score=0;
var blueCar=new carclass();
var sniperUfos = [];
var shotgunUfos = [];
var started=false;
let time=0;
var ufos=[]
window.onload=function(){
    var framesPerSec=50;
    started=true;
    ufos.push(new ufo());
    ufos[ufos.length-1].reset();
    setInterval(all,1000/framesPerSec);
}

restart.addEventListener("mousedown",()=>{
    gameOver.classList.remove("active");
    started=true;
})

setInterval(()=>{
if(started){
    time++;
    spawnEnemies();
}
},1000);
    
function all(){
    if(started){
        moveAll();
        drawAll();
    }
}


function moveAll(){   
    ufos.forEach((el,index)=>{el.move(blueCar);el.index=index;blueCar.checkCollision(el);});
    shotgunUfos.forEach((el,index)=>{el.move(blueCar);el.index=index;blueCar.checkCollision(el);});
    sniperUfos.forEach((el,index)=>{el.move(blueCar);el.index=index;blueCar.checkCollision(el);});
    blueCar.carMove();
}

blueCar.reset();

function drawAll(){   
    rect(0,0,canvas.width,canvas.height,"black");
    rect(75,40,200,20,"#e22b2b")
    ufos.forEach((el)=>{
        el.fire(blueCar);
        el.draw();
        el.edgeWrap();
    })
    shotgunUfos.forEach((el)=>{
        el.fire(blueCar);
        el.draw();
        el.edgeWrap();
    })
    sniperUfos.forEach((el)=>{
        el.fire(blueCar);
        el.draw();
        el.edgeWrap();
    })
    blueCar.draw();
    blueCar.edgeWrap();
}


const spawnEnemies=()=>{
    if(time%10==0){
        ufos.push(new ufo());
        ufos[ufos.length-1].reset();
    }
    if(time%15==0){
        shotgunUfos.push(new shotgunClass())
        shotgunUfos[shotgunUfos.length-1].reset();
    }
    if(time%20==0){
        sniperUfos.push(new sniperClass());
        sniperUfos[sniperUfos.length-1].reset();
    }
    if(time%35==0){
        Math.random()>0.5?
        ()=>{sniperUfos.push(new sniperClass());
            sniperUfos[sniperUfos.length-1].reset();
        }:
        ()=>{shotgunUfos.push(new shotgunClass());
            shotgunUfos[shotgunUfos.length-1].reset();
        }
    }
    if(time%75==0){
        if(Math.random()>0.5){
            shotgunUfos.push(new shotgunClass());
            shotgunUfos[shotgunUfos.length-1].reset();
            sniperUfos.push(new sniperClass());
            sniperUfos[sniperUfos.length-1].reset();
        }else{
            sniperUfos.push(new sniperClass());
            sniperUfos[sniperUfos.length-1].reset();
            sniperUfos.push(new sniperClass());
            sniperUfos[sniperUfos.length-1].reset();
            ufos.push(new ufo());
            ufos[ufos.length-1].reset();
        }
    }
}
