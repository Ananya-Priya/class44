var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var eggs;
var eggGroup;
var eggimg1,eggimg2;
var brokenwhiteimg;
var brokengoldenimg;
var player_img;
var player1score =0;
var player2score =0;
var invisibleground;


function preload(){
  back_img = loadImage("background.jpg");
  player_img = loadImage("nest.png");
  eggimg1=loadImage("whiteegg.png");
  eggimg2=loadImage("goldenegg.png");
  brokenwhiteimg=loadImage("brokenegg.png");
  brokengoldenimg=loadImage("brokengolden.png");
  eggGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();

  invisibleground=createSprite(500,580,1000,20)
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}