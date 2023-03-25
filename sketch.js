
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,rightSide

function preload()
{
	
}

function setup() {
	createCanvas(2000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	var ball_options={
		isStatic : false,
		resitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(200,100,25,ball_options);
	World.add(world,ball);

	Matter.Bodies.circle(50,50,20,ball_options)
	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1500,600,20,120);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,50);
  
  drawSprites();
 
groundObj.display();
leftSide.display();
rightSide.display();

}

function keyPressed(){
	if(keyCode=== UP_ARROW)

	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

}



