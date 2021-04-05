var mouse,mouseImage;
var cat,catImage;
var bgImg;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    mouseImage1 =loadAnimation("images/mouse1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage4 = loadAnimation("images/cat4.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage4 = loadAnimation("images/mouse4.png") 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", catImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
   jerry.addAnimation("jerryStanding", mouseImage1);
   jerry.scale = 0.15;
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation("tomLastImage",catImage4);
    tom.Scale = 0.2;
    tom.X = 300;
    tom.changeAnimation("tomLastImage")
    jerry.addAnimation("jerryLastImage",mouseImage4);
    jerry.scale = 0.15
    jerry.changeAnimation("jerryLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning",catImage2)
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryTeasing",mouseImage2)
    jerry.changeAnimation("jerryTeasing");

  }

}
