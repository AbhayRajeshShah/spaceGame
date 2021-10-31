function parentClass(){
    this.x;
    this.y;
    this.xv=1;
    this.yv=1;
    this.bruh=0;
    this.move=function(){
        this.xv=Math.cos(this.ang)*this.bruh;
        this.yv=Math.sin(this.ang)*this.bruh;
        this.x+=this.xv;
        this.y+=this.yv;
    }
    this.edgeWrap=function(){
        if(this.x<0){
            this.x=canvas.width-13.5;
        }else if(this.x>canvas.width){
            this.x=13.5;
        }
        if(this.y<0){
            this.y=canvas.height-12;
        }else if(this.y>canvas.height){
            this.y=12;
        }
    }
    this.reset=function(){
        this.x=canvas.width/2;
        this.y=canvas.height/2;
    }
    this.dist=function(testX,testY){
        this.deltaX=testX-this.x;
        this.deltaY=testY-this.y;
        var dist=Math.sqrt((this.deltaX*this.deltaX)+(this.deltaY*this.deltaY))
        var check = dist<=this.collissionRadius;
        return(check);
    }
}