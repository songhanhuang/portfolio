function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#2DE3C6');
  textAlign(CENTER, CENTER)
  textSize(30)
  text('this is my project 1', width/2, height/2)
  noStroke()
  circle(width/2, height/2+100, sin(frameCount*0.1)*30)
  
}