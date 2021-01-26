
function setup() {
  createCanvas(800,400);

  mrect = createSprite(400,200);
  mrect.debug = true ;
  mrect.shapeColor = "blue" ;

  frect = createSprite(200,100);
  frect.debug = true ;
  frect.shapeColor = "blue" ; 
}

function draw() {
  background("yellow");  

 mrect.x = mouseX;
 mrect.y = mouseY;

 if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
   frect.x-mrect.x<frect.width/2+mrect.width/2 &&
   frect.y-mrect.y<frect.height/2+mrect.height/2 &&
   mrect.y-frect.y<frect.height/2+mrect.height/2
   ){
   mrect.shapeColor = "Black";
   frect.shapeColor = "Black";
 }else {
  mrect.shapeColor = "blue" ;
  frect.shapeColor = "blue" ;
 }




  drawSprites();
}