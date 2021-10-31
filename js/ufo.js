ufo.prototype=new parentClass();
const ufoSpeed=1.9;
this.collissionRadius=20;
const timeUntilDirChange=60;
function ufo(){
    this.randAngle=0;
    this.type="ufo";
    this.shot= new shotclass();
    this.shotLife=100;
    this.edgeWrap();
    this.index;
    this.done=false;
    this.collissionRadius=20;
    this.Reset=this.reset;
    this.reset=function(){
        this.shot.reset();
        this.Reset();
        this.x=Math.random()*canvas.width;      
        this.y=Math.random()*canvas.height;
        drawSpawn(["red","cyan"],this);
        this.timeLeft=0;       
    }
    
    this.move=function(what){
        if(this.done){
            this.shot.move();
            this.timeLeft--;
            if(this.timeLeft<=0){
                this.ang = Math.atan2(what.y-this.y,what.x-this.x)
                this.xv=Math.cos(this.ang)*ufoSpeed;
                this.yv=Math.sin(this.ang)*ufoSpeed;
                this.timeLeft=timeUntilDirChange;         
            }
            this.x+=this.xv;
            this.y+=this.yv;   
        }
  
    }
  this.playerhp=0;
  this.fire=(player)=>{
      if(this.done){
        let dist =Math.sqrt(Math.pow(player.x-this.x,2)+Math.pow(player.y-this.y,2)) 
        if(this.shot.shotready()&&dist<250){
          this.shot.shootFrom(this,this.ang);
        }
        if(this.shot.shotCollision(player)){
            this.playerhp+=10;
            if(this.playerhp===10){
                player.hp-=10;
            }
        }else{
            this.playerhp=0;
        } 
      }
     
  }
    this.draw=function(){
        if(this.done){
            this.shot.draw(this);
            drawBitmapWithRotation(ufoPic,this.x,this.y,this.ang);
        }

    }
}