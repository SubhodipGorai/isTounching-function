var moving_o,fix_o;
function setup() {
  createCanvas(800,400);
  moving_o = createSprite(400, 200, 50, 50);
  moving_o.debug = true;
  fix_o = createSprite(200, 300, 50, 50);
  fix_o.debug = true;
  
}

function draw() {
  background(5,55,55);  
  moving_o.x = mouseX;
  moving_o.y = mouseY;
  if(moving_o.x - fix_o.x <moving_o.width/2+fix_o.width/2 && fix_o.x - moving_o.x <fix_o.width/2+moving_o.width/2 &&moving_o.y - fix_o.y <moving_o.width/2+fix_o.width/2 && fix_o.y - moving_o.y <fix_o.width/2+moving_o.width/2){
  moving_o.shapeColor = "red";
  fix_o.shapeColor = "blue";
  fix_o.velocityY = -3;
  fix_o.velocityX = -3;
  }
  else {
    moving_o.shapeColor = "yellow";
    fix_o.shapeColor = "green";
  }
  drawSprites();
}