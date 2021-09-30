var sea;
var seaImg;
var shipImg1;



function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(500,500);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  ship = createSprite(300,300,50,40);
  ship.addAnimation("running", shipImg1);
  ship.scale = 0.30;
}

function draw() {
  background("sea.png");

  sea.velocityX = -10;
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
  




  drawSprites();
}