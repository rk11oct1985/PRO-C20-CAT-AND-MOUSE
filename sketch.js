
function preload() {
    //load the images here
    bg = loadImage ("garden.png");
    catImg1 = loadAnimation ("cat1.png");
    catImg2 = loadAnimation ("cat2.png", "cat3.png");
    catImg3 = loadAnimation ("cat4.png");

    mouseImg1 = loadAnimation ("mouse1.png");
    mouseImg2 = loadAnimation ("mouse2.png", "mouse3.png");
    mouseImg3 = loadAnimation ("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite (850,600)
    cat.addAnimation ('catSleeping', catImg1)
    cat.scale = 0.2;

    mouse = createSprite (200,600)
    mouse.addAnimation ('mouseStanding', mouseImg1)
    mouse.scale = 0.2;



}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImg", catImg3)
        cat.changeAnimation("catLastImg")
        cat.scale = 0.2;
        cat.x = 300;

        mouse.addAnimation("mouseLastImg", mouseImg3)
        mouse.changeAnimation("mouseLastImg")
        mouse.scale = 0.2;
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if (keyCode === LEFT_ARROW){
       cat.velocityX = -5;
       cat.addAnimation("catRunning", catImg2);
       cat.changeAnimation("catRunning");

       mouse.addAnimation("mouseTeasing", mouseImg2);
       mouse.frameDelay = 25;
       mouse.changeAnimation("mouseTeasing");
   }

}
