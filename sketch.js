
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var wall1
var wall2
var wall3
var garbage
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER)
	var options={isStatic:true }
	ground=Bodies.rectangle(400,600,800,10,options)
	wall1=Bodies.rectangle(550,590,100,10,options)
	wall2=Bodies.rectangle(505,545,10,100,options)
	wall3=Bodies.rectangle(595,545,10,100,options)
	garbage=Bodies.circle(100,545,20)
	//Create the Bodies Here.

   World.add(world,ground)
   World.add(world,wall1)
   World.add(world,wall2)
   World.add(world,wall3)
   World.add(world,garbage)
	Engine.run(engine);
  
}


function draw() {
	background("skyblue")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)
  rect(wall1.position.x,wall1.position.y,100,10)
  rect(wall2.position.x,wall2.position.y,10,100)
  rect(wall3.position.x,wall3.position.y,10,100)

  circle(grabage.body.position.x,garbage.body.position.y,20)
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(garbage.body,garbage.body.position,{x:85,y:85})
	 }
 }


