let score = 0;
let spawnEvery = 60;
let ghost = { x: 240, y: 180 };

function setup() {
  createCanvas(480, 360);
}

function draw() {
  background(5,10);
  fill(255);
  textSize(16);
  text('Score: ' + score, 12, 26);
  fill(255, 240, 200);
  ellipse(400, 60, 50, 50);

  fill(40, 30, 50);
  rect(0, 300, 480, 60);


  ghost.x += random(-3, 3);
  ghost.y += random(-3, 3);
  drawGhost(ghost.x, ghost.y);

  drawPumpkin(350, 150);
}

function drawGhost(x, y) {
  noStroke();
  fill(220, 255, 230);
  ellipse(x, y, 60, 60);

  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
}

function drawPumpkin(x, y) {
  // Pumpkin body
  noStroke();
  fill(255, 120, 0);
  ellipse(x, y, 65, 50);
  ellipse(x - 15, y, 35, 50);
  ellipse(x + 15, y, 35, 50);

  // Stem
  fill(40, 120, 30);
  rect(x - 5, y - 32, 10, 15);

  // Eyes
  fill(30);
  triangle(x - 20, y - 10, x - 10, y - 10, x - 15, y);
  triangle(x + 10, y - 10, x + 20, y - 10, x + 15, y);

  // Spooky smile
  rect(x - 15, y + 10, 30, 5);
  
}
function mousePressed() {
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    drawGhost();
  }
}
