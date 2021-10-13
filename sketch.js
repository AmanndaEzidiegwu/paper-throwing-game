
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var myengine;
var myworld;
var groundobject;
var wall1;
var wall2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	var ball_options={isStatic:false,
	restitution:0.5,
	friction:0,
	density: 1.2
	}
	ball = Bodies.circle(400,500,20,ball_options);
	World.add(myworld,ball);

	groundobject= new Ground(400,690,800,10);
	wall1 = new Ground(550,640,20,90);
	wall2 = new Ground(670,640,20,90);

    
	


	Engine.run(myengine);
  
}

function keyPressed() 
{
 if (keyIsDown(UP_ARROW) ) {
	Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});

 }

}

function draw() {
  Engine.update(myengine)
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  groundobject.display();
  wall1.display();
  wall2.display();

  
  
  drawSprites();
 
}



