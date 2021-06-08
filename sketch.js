var iss,spacecraft;
var hasDocked=false;

function preload() {
  bgImage = loadImage("Docking-undocking/spacebg.jpg")
  issImage = loadImage("Docking-undocking/iss.png")
  s1Image = loadImage("Docking-undocking/spacecraft1.png")
  s2Image = loadImage("Docking-undocking/spacecraft2.png")
  s3Image = loadImage("Docking-undocking/spacecraft3.png")
  s4Image = loadImage("Docking-undocking/spacecraft4.png")

}
function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(300,250,50,50)
  spacecraft.addImage(s1Image)
  spacecraft.scale=0.15
  iss=createSprite(350,120,20,20)
  iss.addImage(issImage)
  iss.scale=0.5
}

function draw() {
  background(bgImage);
  if(!hasDocked) {
   spacecraft.x=spacecraft.x + random(-1,1)
   if(keyDown("UP_ARROW")){
     spacecraft.y=spacecraft.y-2

   }
   if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(s3Image)
    spacecraft.x=spacecraft.x-1

  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(s2Image)
    spacecraft.x=spacecraft.x+1

  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(s4Image)
    spacecraft.y=spacecraft.y+1

  }

  }  
  if(spacecraft.y<=(iss.y+50)&&spacecraft.x<=(iss.x-20)){
    hasDocked=true
    textSize(30)
    fill('white')
    text("Docking successful",200,300)
  }
  drawSprites();
}

