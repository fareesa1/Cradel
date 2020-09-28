
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, bob, bob2, bob3,bob4, bob5, chain, chain2, chain3;
var chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 bob = new Bob(400,400,20);
 bob2 = new Bob(380,400,20);
 bob3 = new Bob(420,400,20);
 bob4 = new Bob(360,400,20);
 bob5 = new Bob(440,400,20);
 roof = new Roof(400,250,180,10);

 chain = new Rope(bob.body, roof.body, 2, 0);
 chain2 = new Rope(bob2.body, roof.body,-20, 0);
 chain3 = new Rope(bob3.body, roof.body,20, 0);
 chain4 = new Rope(bob4.body, roof.body,-38, 0);
 chain5 = new Rope(bob5.body, roof.body,40, 0);

 

 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();;
  keypressed();
  drawSprites()
}

function keypressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob.body,bob.body.position,{x:-10,y:-5})
 }
}



