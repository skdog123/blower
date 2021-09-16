const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(375, 300, 130, 15);
  button=createButton("Click to Blow")
  button.position(width/2-10,height-50,)
  button.class("blowButton")
  button.mousePressed(blow)

blower = new Blower(width/2+35,265,100,100)
ball = new Ball(width/2+35,165,40)
var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:800, height:400, wireframes:false } }); Matter.Render.run(render);
}


function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();
 blower.show()
 ball.show()
}
 


function blow(){
  Matter.Body.applyForce(ball.body, {x:0,y:0},{x:0,y:-0.3})
}