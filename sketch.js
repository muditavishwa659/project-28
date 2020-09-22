
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var boy,boyimg;
var stone1,chain1;
function preload()
{
	boyimg = loadImage("boy.png") 
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree = new Tree(800,700);
	stone1 = new stone(180,500,20);
	Engine.run(engine);
	mango1 = new mango(900,450,30)
	mango2 = new mango(800,450,30)
	mango3 = new mango(700,450,30)
	mango4 = new mango(750,400,30)
	mango5 = new mango(850,400,30)
	mango6 = new mango(890,400,20)
	mango7 = new mango(790,400,20)
	mango8 = new mango(800,350,30)

	chain1 = new chain(stone1.body,{x:180,y:570});
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	image(boyimg,150,500,150,250)

	ground.display();
	tree.display();
	stone1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	chain1.display();
  drawSprites();
 
	detectcollision(stone1,mango1);
	detectcollision(stone1,mango2);
	detectcollision(stone1,mango3);
	detectcollision(stone1,mango4);
	detectcollision(stone1,mango5);
	detectcollision(stone1,mango6);
	detectcollision(stone1,mango7);
	detectcollision(stone1,mango8);
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain1.fly()
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
    if(keyCode === 32){
        chain1.attach(stone1.body);
    }
}



