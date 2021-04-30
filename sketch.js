var snowpic;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var snowflake1, snowflake2, snowflake3;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

 
  snowpic = loadImage("snow1.jpg");


  snowflake1 = new Snow(200, 200, 50, 50);
  snowflake2 = new Snow(300, 304, 50, 50);
  snowflake3 = new Snow(300, 200, 50, 50);

 
  Engine.run(engine);
}

function draw() {
  background(snowpic); 
  snowflake1.display();
  snowflake2.display();
  snowflake3.display();


  drawSprites();
}




