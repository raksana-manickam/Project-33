

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var boy_image;
var maxSnow = 50;
var snow_image;
var snow = [];
var boy;
var backgroundImg;

var bg = "day.jpg"


function preload(){
  boy_image = loadImage("boy.png")
  snow_image = loadImage("snow.webp")
  getBackgroundImg()
}

function setup(){
  var canvas = createCanvas(700,400);

  engine = Engine.create();
  world  = engine.world;
  
  boy = new Boy(400,350,45,155);

  ground = new Land(350,395,700,10);
  
  
  if(frameCount%100===0){
    for(var i=0; i<maxSnow;i++){
      snow.push(new Snow(random(0,700),random(0,500),3,10));
     }
    }

}

function draw(){
  createCanvas(700,400)
  if(backgroundImg)
  background(backgroundImg)

  Engine.update(engine);

  boy.display();
  ground.display();
  
  for(var i=0; i<maxSnow;i++){
    snow[i].display();
    snow[i].update();
  }
 
  keyPressed();
  drawSprites();

}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
 
 if(hour>=06 && hour<=18){
     bg = "day.jpg";
 }
 
 else{
    bg = "night.jpg";
 }

 backgroundImg = loadImage(bg);
 console.log(backgroundImg);
}


function keyPressed(){

  if(keyCode === 26){
    boy.body.position.x = boy.body.position.x + 10;
  }

  if(keyCode === 27){
    boy.body.position.x = boy.body.position.x - 10;
}
}