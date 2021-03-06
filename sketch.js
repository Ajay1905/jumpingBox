var canvas;
var music;
var blueBox;
var greenBox;
var redBox;
var yellowBox;
var jumpingBox;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
   
    //create 4 different surfaces
   blueBox = createSprite(100,590,180,20);
   blueBox.shapeColor = "blue";

   redBox = createSprite(300,590,180,20);
   redBox.shapeColor = "red";

   greenBox = createSprite(500,590,180,20);
   greenBox.shapeColor = "green";

   yellowBox = createSprite(700,590,280,20);
   yellowBox.shapecolor = "yellow";


    //create box sprite and give velocity
    jumpingBox = createSprite(random(10,750),300,20,20);
    jumpingBox.shapeColor = "white";
    jumpingBox.velocityX = 3;
    jumpingBox.velocityY = 3;
}

function draw() {
    background(rgb(10,10,10));
    //create edgeSprite
   createEdgeSprites();

   if(jumpingBox.isTouching(redBox)){
       jumpingBox.shapeColor = "red";
       music.stop()
   }
   if(jumpingBox.isTouching(greenBox)){
    jumpingBox.shapeColor = "green";
    music.stop()
}
if(jumpingBox.isTouching(blueBox)){
    jumpingBox.shapeColor = "blue";
    music.stop()
}if(jumpingBox.isTouching(yellowBox)){
    jumpingBox.shapeColor = "yellow";
    music.play()

}  
   jumpingBox.bounceOff(redBox);
   jumpingBox.bounceOff(blueBox);
   jumpingBox.bounceOff(greenBox);
   jumpingBox.bounceOff(yellowBox);


   drawSprites();


    //add condition to check if box touching surface and make it box
}
