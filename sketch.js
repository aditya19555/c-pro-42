

//Declare iss, spacecraft and hasDocked variables.
var iss, spacecraft,hasDocked ;

//Assign false to hasDocked variable.
hasDocked=false


//create function preload
function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg");
  iss_img = loadImage("Docking-undocking/iss.png");
  scimg = loadImage("Docking-undocking/spacecraft1.png");
  scimg1 = loadImage("Docking-undocking/spacecraft2.png");
  scimg2= loadImage("Docking-undocking/spacecraft3.png");
  scimg3= loadImage("Docking-undocking/spacecraft4.png");

}



function setup() {
  createCanvas(800, 400);
  
  spacecraft = createSprite(405,400);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  //Create iss sprite in setup( )
  iss = createSprite(400, 200, 50, 50);
 // Add animation to the spacecraft sprite and scale the image.
  iss.addImage("iss", iss_img);
  iss.scale = 0.7;

}




function draw() {
  background(bg); 
  
  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1, 1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(scimg3);
      spacecraft.x = spacecraft.x -2;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2);
      spacecraft.x = spacecraft.x +2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
      spacecraft.y = spacecraft.y +2;
    }

    if (spacecraft.y <= (iss.y+70 ) && spacecraft.x <= iss.x ) {
      hasDocked = true;
      
text("Docked sucessfull",200,100)
    }

    }
  drawSprites();
}