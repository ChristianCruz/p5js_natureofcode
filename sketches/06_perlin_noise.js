var xoff = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(51);

  // var x = random(0, width);

  var x = noise(xoff) * width;

  xoff += 0.02;

  fill(255);
  ellipse(x, height/2, 48, 48);
}
