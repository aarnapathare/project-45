var backIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint


function preload()
{
backIMG = loadImage("backIMG.jpg")
}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  rocket = new Rocket(400,630,20,20)  
ground = new Ground(400,675,800,20)
 
circles1 = new Circles(200,20,10)
circles2 = new Circles(250,50,10)
circles3 = new Circles(300,30,10)
circles4 = new Circles(450,10,10)
circles5 = new Circles(150,60,10)
circles6 = new Circles(350,55,10)
circles7 = new Circles(420,30,10)
circles8 = new Circles(175,40,10)
circles9 = new Circles(220,20,10)
circles10 = new Circles(700,30,10)
circles11 = new Circles(655,60,10)
circles12 = new Circles(455,70,10)
circles13 = new Circles(573,80,10)
circles14 = new Circles(680,20,10)
circles15 = new Circles(432,30,10)
circles16 = new Circles(584,50,10)

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(backIMG);
fill("white")
textSize(20)
 text("Score: ", 200, 50)

 textSize(12)
 text("Press the Up Arrow to Move ", 650, 650)

 if(keyIsDown(UP_ARROW)){
  rocket.distance +=10
}

  rocket.display()
  ground.display()
  circles1.display()
  circles2.display()
  circles3.display()
  circles4.display()
  circles5.display()
  circles6.display()
  circles7.display()
  circles8.display()
  circles9.display()
  circles10.display()
  circles11.display()
  circles12.display()
  circles13.display()
  circles14.display()
  circles15.display()
  circles16.display()


  drawSprites();
 
}


  
// function keyPressed(){
//   if(keyCode === 32){
//     rocket.distance +=10

//   }
// }

