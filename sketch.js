var car, wall, road, light, banner;
var speed, weight;
var carImage, wallImage, roadImage;
var back, backgroundImage;

let dingDong;

function preload(){
  carImage = loadImage("car.png");
  wallImage = loadImage("wall.png");
  backgroundImage = loadImage("bg.jpg");
  roadImage = loadImage("road.png");

  dingDong = loadSound('car-crash.mp3');
}

function setup() {
  createCanvas(1200,800);

  speed = random(50,200);
  weight = random(400,1500);

  car = createSprite(100,700,50,50);
  car.addImage("cars", carImage);
  car.scale = 0.45;
  car.velocityX = speed;

  wall = createSprite(1200,640,60,height/2);
  wall.addImage("walls", wallImage);
  wall.scale = 0.5;

  road = createSprite(600,800,10,10);
  road.addImage("roadImg", roadImage);
  road.scale = 2;

  back = createSprite(400,400,20,20);
  back.addImage("back", backgroundImage);
  back.scale = 3;

  banner = createSprite(1000,100,150,50);
  banner.shapeColor = "black";

  light = createSprite(1000,100,30,30);
  light.shapeColor = "white";

  road.depth = back.depth+1;
  car.depth = road.depth+1;
  wall.depth = road.depth+1;
}

function draw() {
  background(0,0,0);

  edges = createEdgeSprites();
  car.collide(edges);
  car.collide(wall);

  drawSprites();

    var deformation = 0.5 * weight * speed * speed/22509;
    denone = Math.round(deformation);
    fill("white");
    var deform = text(denone,1020,100);
    deform.depth = light.depth+1;

  if(wall.x-car.x < (car.width+wall.width)/2){

    wall.velocityX = 2;

    if(deformation>180){
      light.shapeColor = "red";
    }

    if(deformation<180 && deformation>100){
      light.shapeColor = "yellow";
    }

    if(deformation<100){
      light.shapeColor = "green";
    }
  }
}