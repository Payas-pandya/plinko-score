  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var gameState = "play";
var particles = [];
var plinkos = [];
var particle;
var turn = 0;
var divisionHeight=300;
var score = 0;
var divisions = [];
var count = 0;


function setup() {
  createCanvas(800, 715);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,724,900,20);
  


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 600, 10, 230));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);

  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles.y > 550){
     if(particles.x > 320 && particles.x < 400){
       score = score+100;
     }
     if(particles.x > 0 && particles.x < 160){
       score = score+500; 
     }
     if(particles.x > 160 && particles.x < 320){
       score = score+200;
     }
     if(particles.x > 400 && particles.x < 560){
       score = score+200;
     }
     if(particles.x > 560 && particles.x < 720){
       score = score+500;
     }
   }
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}