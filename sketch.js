const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boy, boyImg;

var thunder, thunderImg;

var rain = [];

var umbrella;

var rainydayBackground, backgroundImg;

var maxRain = 100;

function preload(){
    
    thunderImg = loadAnimation("1.png", "2.png", "3.png", "4.png");

    backgroundImg = loadImage("rainy day background.png");

}

function setup(){

    createCanvas(400, 700);

    engine = Engine.create();

    world = engine.world;
  
    thunder = createSprite(200, 100);

    thunder.addAnimation("thunderImg", thunderImg);

    thunder.scale = 0.3;

    umbrella = new Umbrella(100, 100, 50, 50);

    if(frameCount%60 === 0){

      for(var i =0; i<maxRain; i++){

        rain.push(new Rain(random(0, 100), random(0, 200), 10));

      }

    }

}

function draw(){

    background(backgroundImg);

    Engine.update(engine);

    umbrella.display();

    for(var i =0; i<maxRain; i++){

      rain[i].display();

      rain[i].update();

    }

    thunder.display();
    
}   

function Thunder(){

    rand = Math.round(random(1, 4));

        if(frameCount % 80 === 0){

          thunderCreatedFrame = frameCount;

          thunder = createSprite(random(10, 370), random(10, 30), 10, 10);

          switch(rand){

            case 1 : thunder.addImage(thunder1);

            break;

            case 2 : thunder.addImage(thunder2);

            break;

            default : break;

          }

          thunder.scale = random(0.3, 0.6);
          
        }

}
  