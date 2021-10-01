 
function preload(){
   seaImg = loadImage("sea.png");
 shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
   //shipImg1=loadAnimation("ship-1","ship-1","ship-2","ship-1");
   //shipImg1=loadAnimation("1.png","2.png","3.png","4.png");
      createCanvas(400,400);
}

function setup(){


  sea=createSprite(400,200)
  sea.addImage(seaImg)
  ship=createSprite(200,200,50,59);
  ship.addAnimation("movingship",shipImg1)
  ship.scale=0.2;
}




function draw(){
  background("blue");
  sea.velocityX=-3
   
   drawSprites();
 
}



