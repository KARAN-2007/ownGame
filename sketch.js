var bg,bgI;
var hero,hI;


function preload(){
bgI=loadImage("OWNGAMEBG5.png")
hI=loadAnimation("player character/pc1.png","player character/pc2.png",
"player character/pc3.png","player character/pc4.png","player character/pc5.png",
"player character/pc6.png")
}


function setup(){
createCanvas(950,500)
 bg=createSprite(width/2,height/2,950,500)
 bg.addImage(bgI)
 bg.scale=1.2;
 bg.velocityX=-2;

 hero=createSprite(100,320);
 hero.addAnimation("play",hI)
 hero.scale=0.35;
}

function draw(){
  background("purple")
if(bg.x<450){
  bg.x=780
}
  drawSprites()
}


