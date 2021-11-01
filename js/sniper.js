sniperClass.prototype = new parentClass();

function sniperClass(){
    this.done=false;
this.draw=function(){
    if(this.done){
        this.shot.draw(this);
        drawBitmapWithRotation(sniperPic,this.x,this.y,this.ang);
    }
}
this.type="sniper"
this.shot=new shotclass();
this.shotLife=100;
this.timeUntilDirChange=0;
this.collissionRadius=20;
this.speed=1.5;
this.playerhp=0;
this.x=0;
this.y=0;
this.xv=1;
this.yv=1;
this.ang=0;
this.edgeWrap();
this.Reset=this.reset;
this.reset=()=>{
    this.Reset;
    this.x=Math.random()*canvas.width;      
    this.y=Math.random()*canvas.height;
    drawSpawn(["purple","orange"],this);
}
this.fire=(player)=>{
    if(this.done){
        let dist =Math.sqrt(Math.pow(player.x-this.x,2)+Math.pow(player.y-this.y,2)) 
        if(this.shot.shotready()&&dist<500){
            this.shot.shootFrom(this,this.ang)
        }
        if(this.shot.shotCollision(player)){
            this.playerhp+=10;
            if(this.playerhp===10){
                player.hp-=20;
            }
        }else{
            this.playerhp=0;
        }
    }
}
this.move=(what)=>{
    if(this.done){
        this.shot.move();
        this.timeUntilDirChange--;
        if(this.timeUntilDirChange<=0){
            this.ang = Math.atan2(what.y-this.y,what.x-this.x);
            this.yv = Math.sin(this.ang)*this.speed;
            this.xv=Math.cos(this.ang)*this.speed;
            this.timeUntilDirChange=0;
        }
        this.x+=this.xv;
        this.y+=this.yv;
    }

}

}