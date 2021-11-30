var ground,groundimage
var trex ,trex_running;
function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(55,170,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  //create a trex sprite
 ground=createSprite(300,200,600,20)
 ground.addImage("ground33",groundimage)
}

function draw(){
  background("lighgrey")
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
 drawSprites() 

}
