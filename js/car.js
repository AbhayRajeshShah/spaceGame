//car
carclass.prototype=new parentClass();
function carclass(){
this.myShots=[];
this.shotLife = 30;
this.ang=0;
this.myCarPic;
this.hp=0;
this.type="player"
this.accCheck = false;
this.downCheck=false;
this.leftCheck = false;
this.rightCheck = false;
this.collissionRadius=20;
this.upar;
this.fire;
this.left;
this.right;
this.superClass=this.move;
this.thrust=0;
this.bruh=this.thrust
this.carMove=function(){   
    if(this.myShots.length>0){
        this.myShots.forEach((el)=>el.move())
    }
    this.bruh*=0.99;
    if(this.accCheck){
        this.bruh+=0.15;        
        this.superClass();       
    }
    if(this.leftCheck){
        this.ang-=0.08;
    }
    if(this.rightCheck){
        this.ang+=0.08;
    }
 this.x+=this.xv;
 this.y+=this.yv
}

this.edgeWrap();
this.controls=function(upar,right,left,fire){
    this.upar=upar;
    this.fire=fire;
    this.right=right;
    this.left=left;
}
this.draw=function(){
    if(this.myShots.length>0){
        this.myShots.forEach((el,index)=>{
            el.draw(this);
            el.index=index;
            if(el.shotready()){
                this.myShots.splice([el.index],1);
            }
        })
    }
    if(this.hp>0){
        rect(75,40,this.hp*2,20,"#17b17d")
    }else{
        this.reset();
        ufos=[];
        shotgunUfos=[];
        sniperUfos=[];
        time=0;
        started=false;
        if(localStorage.getItem("highscore")!==null){
            score>JSON.parse(localStorage.getItem("highscore"))?localStorage.setItem("highscore",JSON.stringify(score)):''
        }else{
            localStorage.setItem("highscore",score.toString());
        }
        gameOver.classList.add("active");
        gameOverText.innerText=`Score: ${score}`;
        high.innerText = "Highscore :" + localStorage.getItem("highscore");
        score=0;
        scoreText.innerText=`Score: ${score}`;
    }
    
    drawBitmapWithRotation(carPic,this.x,this.y,this.ang);
}
this.blablareset=this.reset;
this.reset=function(){
        this.blablareset();
        this.myShots=[];
        this.hp=100;
}

this.cannonFire=function(){
    if(this.myShots.length<3||this.myShots.length===0){
        this.myShots.push(new shotclass());
        this.myShots[this.myShots.length-1].shootFrom(this,this.ang);
    }
}
let playerhp=0;
this.checkCollision=function(what){
    if(what.dist(this.x,this.y)){
        playerhp+=10;
          if(!playerhp>10){
              this.hp-=10;
          }
    }else{
        playerhp=0;
    }
    this.myShots.forEach((el)=>{
        if(what.type==="ufo"){
            if(el.shotCollision(what)){
                this.myShots.splice([el.index],1);
                drawSpawn(["#f2d3d3","#dd5743"],what)
                ufos.splice(what.index,1);
                updateScore(100);
            }
        }
        if(what.type==="shotgunUfo"){
            if(el.shotCollision(what)){
                this.myShots.splice([el.index],1);
                drawSpawn(["#f2d3d3","#ddbb32"],what)
                shotgunUfos.splice(what.index,1);
                updateScore(250);
            }
        }
        if(what.type==="sniper"){
            if(el.shotCollision(what)){
                this.myShots.splice([el.index],1);
                drawSpawn(["#f2d3d3","#bb43da"],what)
                sniperUfos.splice(what.index,1);
                updateScore(500);
            }
        }

    })
}


const updateScore = (x)=>{
    score+=x;
    scoreText.innerText = `Score: ${score}`
}

}


