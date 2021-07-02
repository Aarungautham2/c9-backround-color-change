
function setup() {
  createCanvas(400,400);
  background("brown");
}

function draw() 
{
 if(keyIsDown(DOWN_ARROW)){
   background("RED")
 }
 if(keyIsDown(UP_ARROW)){
  background("GREEN")
}
if(keyIsDown(LEFT_ARROW)){
  background("YELLOW")
}
if(keyIsDown(RIGHT_ARROW)){
  background("BLUE")
}
}




