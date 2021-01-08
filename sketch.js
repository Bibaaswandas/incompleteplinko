
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisons = [];

var divisonHeight = 300;


function preload()
{
	
}

function setup() {
	createCanvas(480,700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	
	ground3 = new Ground(240,700,480,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  for (var k = 0; k <= width; k = k+ 80){
	  divisons.push(new Ground(k,(height-divisonHeight/2)-10,10,divisonHeight));
  }

  for(var j = 40; j<= width; j = j+50){
	  plinkos.push(new Plinko(j,75,10));

  }
  for(j = 15; j<=width; j= j+50){
	  plinkos.push(new Plinko(j,175,10));
  }

  if(frameCount%90===0){
	  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k<divisons.length; k++){
	  divisons[k].display();
  }

  



ground3.display();



fill ("red");

}




function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}




