var ground, groundImg, cat, catImg, catImg2, catImg3, mouse, mouseImg;

function preload() {
    groundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg = loadAnimation("images/mouse1.png");  
    mouseImg1 = loadAnimation("images/mouse2.png", "images/mouse3.png");  
    mouseImg2 = loadAnimation("images/mouse4.png");  
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(700,600,50,50);
    cat.addAnimation("catImage",catImg);
    cat.scale = 0.2;

    mouse = createSprite(200,600,50,50);
    mouse.addAnimation("mouseImage",mouseImg);
    mouse.scale = 0.15;
}

function draw() {
    background(groundImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;
        cat.addAnimation("catStop", catImg3);
        cat.x = 300;
        cat.changeAnimation("catStop");

        mouse.addAnimation("mouseStop",mouseImg2);
        mouse.changeAnimation("mouseStop");
    }

    drawSprites();
}


function keyPressed(){
   if(keyCode === LEFT_ARROW)
   {
       cat.velocityX = -5;
       cat.addAnimation("catRunning", catImg2);
       cat.changeAnimation("catRunning");

       mouse.addAnimation("mouseTeasing",mouseImg1);
       mouse.frameDelay = 25;
       mouse.changeAnimation("mouseTeasing");
   }
}
