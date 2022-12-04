let x = 300;
let y = 0;
let score = 0;
let speed = 3;
let screen = 0;

function setup() {
  createCanvas(1430, 550);
}

function draw() {
  background(20);
  
  if (screen === 0) {
    start();
  }
  if (screen === 1) {
    gameGo();
  }
  if (screen === 2) {
    end();
  }
}
 
function mousePressed() {
  if (screen === 0) {
    screen = 1;
  }
  if (screen === 2) {
    screen = 0;
  }
}

function start() {
  background('#7FBD32');
  fill(20);
  textAlign(CENTER);
  textSize(20);
  text("Click In The Square To Start Your Game", width / 2, height / 2 + 20);

  restart();
}


function gameGo() {
  background('#B8141F');
  rectMode(CENTER);
  fill('#34090C');
  rect(mouseX, height - 20, 40, 30); 
  
  fill('#E7F7D4');
  noStroke();
  textStyle(NORMAL);
  text("Your Score: " + score, 65, 20);


  y += speed;
  fill(255, 255, 0);
  stroke(255, 255, 0);
  strokeWeight(5);
  circle(x, y,25);
  
  if (y > height) {
    screen = 2;
  }
 
  if (y > height - 30 && x > mouseX - 20 && x < mouseX + 20) {
    y = 0;
    score++;
    speed += 1;
    x = random(width);
  }
}
 
function end() {
  background(139, 0, 0);
  noStroke();
  textAlign(CENTER);
  text("Sorry, Game Over 🥺", width / 2, height / 2);
  text("Your Score :" + score, width / 2, height / 2 + 20);
  text("Click To Restart", width / 2, height / 2 + 40);
}


function restart() {
  y = 0;
  speed = 2;
  score = 0;
}