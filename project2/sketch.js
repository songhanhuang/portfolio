function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#EB6463");
  textAlign(CENTER, CENTER)
  textSize(30)
  text('this is my project 2', width/2, height/2)
  noStroke()
  circle(width/2, height/2+100, sin(frameCount*0.1)*30)
  
}