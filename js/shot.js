
shotclass.prototype=new parentClass();
function shotclass(){

    this.power=10;
    this.bruh=this.power;
    this.index;
    this.shotLife=0;
    var radius=4;

this.shootFrom = function(whichShip,ang){
    this.x=whichShip.x;
    this.y=whichShip.y;
    this.ang=ang;
    this.shotLife=whichShip.shotLife;
}

this.reset=function(){
   this.shotLife=0;  
}
this.superclassMove=this.move;
this.move=function(){
    if(this.shotLife>0){
      this.shotLife--;
      this.superclassMove();
      
    }
    
}
this.draw=function(what){
    if(this.shotLife>0){
        let color=""
        switch(what.type){
            case "sniper":color="purple";break;
            case "shotgunUfo":color="yellow";break;
            case "ufo":color="red";break;
            case "player":color="white";break;
        }
        circle(this.x,this.y,radius,color);
    }
}
this.shotready=function(){
        return (this.shotLife<=0);
}
this.shotCollision=function(what){
    if(this.shotLife<=0){
        return false;
    }
   return what.dist(this.x,this.y)
}

}
