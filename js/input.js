
//keys
var up_arrow = 38;
var down_arrow = 40;
var left_arrow = 37;
var right_arrow = 39;
const spaceBar=32;




document.addEventListener("keydown",keyPressed);
document.addEventListener("keyup",keyRelease);

blueCar.controls(up_arrow,right_arrow,left_arrow,spaceBar);

function setInput(event,whichCar,setTo){   
    if(event.keyCode==whichCar.upar){
        whichCar.accCheck=setTo;
    }
    if(event.keyCode==whichCar.left){
        whichCar.leftCheck=setTo;
    }
    if(event.keyCode==whichCar.right){
        whichCar.rightCheck=setTo;
    } if(event.keyCode==whichCar.fire){
        whichCar.cannonFire();
    }        
}


function keyPressed(evt){
   setInput(evt,blueCar,true);
}
function keyRelease(evt){
    setInput(evt,blueCar,false);
}

