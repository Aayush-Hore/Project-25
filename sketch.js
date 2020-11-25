
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground,paper
var block1,block2,block3;
function preload()
	{
		
	}

function setup() 
	{
	 createCanvas(800, 700);
	 engine = Engine.create();
	 world = engine.world;
	 //Create the Bodies Here.
	 ground = new Ground(400,690,900,10);
	 block1 = new Dustbin(630,675,200,15);
	 block2 = new Dustbin(523,625,15,100);
	 block3 = new Dustbin(737,625,15,100);
	 paper = new Paper(50,680,70);
	 Engine.run(engine);
	
	}


function draw() 
	{
	 rectMode(CENTER);
	 background("white");
	
	 drawSprites();
	 ground.display();
	 paper.display();
	 block1.display();
	 block2.display();
	 block3.display();
	 keyPressed();
	}
function keyPressed()
	 {
	 if(keyCode === UP_ARROW)
	 {
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-5});
	 }
	 }


