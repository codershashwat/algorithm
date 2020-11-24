var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  
 fixedrect =createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="red";
 movingrect=createSprite(200,200,50,50);
 movingrect.shapeColor="red";


}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor="pink";
      fixedrect.shapeColor="pink";
    }

  drawSprites();
}