var runnerImg
var bombImg
var coinImg
var pathImg
var energyDrinkImg
var powerImg
var boundary1
var boundary2

function preload(){
  //pre-load images
    runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
    bombImg = loadImage("bomb.png")
    coinImg = loadImage("coin.png")
    pathImg = loadImage("path.png")
    energyDrinkImg = loadImage("energyDrink.png")
    powerImg = loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;
  path.velocityY = 4;
  
  Runner = createSprite(200,200)
  Runner.addAnimation("personRunning",runnerImg)
  Runner.scale = 0.09
  

  boundary1 = createSprite(400,200,20,400)
  boundary1.visible = false

  boundary2 = createSprite(5,200,20,400)
  boundary2.visible = false

 
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }

  Runner.x = World.mouseX
   
 Runner.collide(boundary1)

 Runner.collide(boundary2)
 
  drawSprites();
}
