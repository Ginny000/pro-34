
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var ground;
var personagem;

function preload(){
  personagem = loadImage("pixel-character.gif");
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var bola_opcoes = {restitution: 0.90}
  bola = Bodies.rectangle(50, 20, 80, 90, bola_opcoes);
  World.add(world, bola);
  
  var ground_opcoes = {isStatic: true}
  ground = Bodies.rectangle(0, 350, 800, 50, ground_opcoes);
  World.add(world, ground);
  rectMode(CENTER);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //ellipse(bola.position.x, bola.position.y, 15);
  push();
  imageMode(CENTER)
  image(personagem, bola.position.x, 315, 80, 90);
  pop();

  rect(ground.position.x, ground.position.y, 800, 1);
}

