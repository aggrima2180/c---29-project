const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stand1,stand2;

var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks6,blocks7,
blocks8,blocks9,blocks10,blocks11,blocks12,blocks13,blocks14,
blocks15,blocks16;

var blocks17,blocks18,blocks19,blocks20,blocks21,blocks22,blocks23,
blocks24,blocks25;

var hexa_image,hexa;
var chain;
//var polygon.png;

function preload(){
    hexa_image = loadImage("polygon.png")
}

function setup(){
    createCanvas(900,400);

    engine =  Engine.create();
    world =  engine.world;

    
    ground = new Ground(400,580,1000,20)
    stand1 = new Ground(640,250,220,20);
    stand2 = new Ground(330,450,250,20);

    //level one
    block1 = new Block(240,425,30,30);
    block2 = new Block(270,425,30,30);
    block3 = new Block(300,425,30,30);
    block4 = new Block(330,425,30,30);
    block5 = new Block(360,425,30,30);
    block6 = new Block(390,425,30,30);
    block7 = new Block(420,425,30,30);
    

   // level two
   block8 = new Block(270,395,30,30);
   block9 = new Block(300,395,30,30);
   block10 = new Block(330,395,30,30);
   block11 = new Block(330,395,30,30);
   block12 = new Block(390,395,30,30);
   

   //level three
   block13 = new Block(300,365,30,30);
   block14 = new Block(330,365,30,30);
   block15 = new Block(360,365,30,30);

   block16 = new Block(330,335,30,30);

   block17 = new Block(500,225,30,30);
   block18 = new Block(610,225,30,30);
    block19 = new Block(640,225,30,30); 
    block20 = new Block(670,225,30,30); 
    block21 = new Block(700,225,30,43);

    block22 = new Block(610,195,30,30)
    block23 = new Block(640,195,30,30)
    block24 = new Block(670,195,30,30)

    block25 = new Block(640,165,30,30)

    hexa = Bodies.circle(50,200,20)
    World.add(world,hexa)

    chain = new Chain(hexa,{x:150,y:260})

    Engine.run(engine);
}
    function draw(){

        background("cyan")

        stand1.display();
        stand2.display();

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        block17.display();
        block18.display();
        block19.display();
        block20.display();
        block21.display();
        block22.display();
        block23.display();
        block24.display();
        block25.display();

        chain.display();

        imageMode(CENTER)
        image(hexa_image,hexa.position.x,hexa.position.y,40,40)
        
        //text(" Drage")

        drawSprites();

    }
    function mouseDragged(){
        Matter.Body.setPosition(hexa.body,{x:mouseX , y:mouseY});
    }

    function mouseReleased(){
        chain.fly();
    }

   