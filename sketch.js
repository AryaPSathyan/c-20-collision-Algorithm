var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.debug = true;
  fixedRect.shapeColor = "red";

  movingRect = createSprite(400,200,80,30);
  movingRect.debug = true;
  movingRect.shapeColor = "red"; 
}

function draw() {
  background(0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "yellow"; 
    movingRect.shapeColor = "yellow";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red"; 
  }
  drawSprites();
}