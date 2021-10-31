
function rect(x,y,w,h,color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,w,h);
}

function circle(x,y,r,color){
    canvasContext.fillStyle=color;
    canvasContext.beginPath();
    canvasContext.arc(x,y, r, 0,Math.PI*2, true );
    canvasContext.fill();
}

    
        
function drawBitmapWithRotation(bitmap,atX,atY,withAng){
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(bitmap,-bitmap.width/2,-bitmap.height/2);
    canvasContext.restore();
}

function drawSpawn(color,what){
    let randomCircles = Math.random()*100;
    let circles=[];
    for(i=0;i<randomCircles;i++){
        let sign;
        Math.random()>0.5?sign=-1:sign=1;
        circles.push({x:what.x+Math.random()*Math.random()*40*sign,y:what.y+Math.random()*Math.random()*40*sign}) 
    }
    var interv = setInterval(()=>{
        circles.forEach((el)=>{
            circle(el.x,el.y,Math.random()*5,color[Math.floor(Math.random()*2)])
        })
    },1);        
    setTimeout(()=>{
        clearInterval(interv)
        what.done=true;    
    },500);   
       
}