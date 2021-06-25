
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  player = loadImage("images/iron.png");
  // stone = loadImage("images/stone.png");

}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(500, 300, 500, 500);
  bg.velocityY = -6;

  iron_man = createSprite(580, 500);
  iron_man.addImage(player);
  iron_man.scale = 0.25;
  

  
}

function draw() {
  bg.addImage(backgroundImg);
  bg.scale=2;
  
  if (bg.y < 100) {
    bg.y = bg.height / 4;
  }

  controls();
  

  
  drawSprites();

}

//controls
function controls() {
  if (keyDown("up")) {
    iron_man.velocityY = -5;
  }
  if (keyDown("down")) {
    iron_man.velocityY = 5;
  }
  if (keyDown("left")) {
    iron_man.velocityX = -5;
  }
  if (keyDown("right")) {
    iron_man.velocityX = 5;
  }
}





