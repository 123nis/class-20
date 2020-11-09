function setup() {
  createCanvas(800,400);
  
  movingrect=createSprite(200,100,20,50)
  fixrect=createSprite(100,300,20,100)
  movingrect.shapeColor="red" 
  fixrect.shapeColor="red"
  movingrect.debug=true
  fixrect.debug=true
}

function draw() {
  background("blue"); 
  movingrect.y=mouseY
  movingrect.x=mouseX
  if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2
   &&fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2 
   &&movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2
   &&fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2){
  movingrect.shapeColor="yellow" 
  fixrect.shapeColor="yellow"
  }else{
    movingrect.shapeColor="red" 
  fixrect.shapeColor="red"
}

  drawSprites();
}