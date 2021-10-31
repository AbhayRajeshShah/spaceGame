shotgunClass.prototype = new parentClass();

function shotgunClass(){
this.x=100;
this.y=100;
this.type="shotgunUfo";
this.collissionRadius=20;
this.index;
this.done=false;
this.yv;
this.xv;
this.shotLife=30;
this.ang;
this.shots=[]
this.speed=1;
this.timeUntilDirChange = 50;
this.draw=()=>{
    if(this.done){
        this.shots.forEach((el)=>{
            el.draw(this);
        })
        drawBitmapWithRotation(shotgunPic,this.x,this.y,this.ang)
    }
}
this.reset=()=>{
    this.x=Math.random()*canvas.width;
    this.y=Math.random()*canvas.height;
    drawSpawn(["yellow","orange"],this);
    this.shots=[];
}

this.move=(what)=>{
    if(this.done){
        this.shots.forEach((el)=>{
            el.move();
        })
        this.timeUntilDirChange--;
        if(this.timeUntilDirChange<=0){
            this.ang = Math.atan2(what.y-this.y,what.x-this.x);
            this.yv = Math.sin(this.ang)*this.speed;
            this.xv=Math.cos(this.ang)*this.speed;
            this.timeUntilDirChange=50;
        }
        this.x+=this.xv;
        this.y+=this.yv;
    }
}

this.playerhp=[0,0,0];
this.fire=(player)=>{
    if(this.done){
        for(i=0;i<3;i++){
            this.shots.push(new shotclass())
        }
        let dist =Math.sqrt(Math.pow(player.x-this.x,2)+Math.pow(player.y-this.y,2)) 
        if(this.shots[0].shotready()&&dist<250){
            this.shots[0].shootFrom(this,this.ang-0.1);
            this.shots[1].shootFrom(this,this.ang);
            this.shots[2].shootFrom(this,this.ang+0.1);
          }
        this.shots.forEach((el,index)=>{
            if(el.shotCollision(player)){
                this.playerhp[index]+=10;
                if(this.playerhp[index]===10){
                    player.hp-=10;
                }
            }else{
                this.playerhp[index]=0;
            }      
        })
    }
    
}
}
