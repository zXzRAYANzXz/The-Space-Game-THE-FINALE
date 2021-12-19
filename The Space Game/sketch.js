var Asteroid, SpaceShip1, SpaceShip2;
var EnemySpaceShipGroup;
var asteroidImg, SpaceShipImg1, SpaceShipImg2;
var score;

function preload(){
  asteroid1 = loadImage("images/AsteroidImage.png");
  SpaceShipImg1 = loadImage("Images/SpaceShipImage1.png");
  SpaceShipImg2 = loadImage("Images/SpaceShipImage2.png");
}

function setup() {
  createCanvas(1200,550);

  Asteroid = createSprite(600, 50, 50, 50);
  Asteroid.addImage("Asteroid",asteroid1);
  Asteroid.scale = 0.2;

  SpaceShip1 = createSprite(500,500,50,50);
  SpaceShip1.addImage("Spaceship1", SpaceShipImg1);
  SpaceShip1.scale = 0.2;

  SpaceShip2 = createSprite(700,500,50,50);
  SpaceShip2.addImage("Spaceship2",SpaceShipImg2)
  SpaceShip2.scale = 0.2;

  EnemySpaceShipGroup = new Group();
}

function draw() {
  background(SpaceBgImage);  
  strokeWeight(2);
  stroke("blue");
  fill("white")
  textFont("Georgia");
  textSize(20);
  text("Score: "+Score, 500,50);
  drawSprites();
}