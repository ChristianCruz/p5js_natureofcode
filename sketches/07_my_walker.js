// 02. Declare a variable
var w;
var xoff = 0;
var yoff= 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(36);
  // 03. Associate the variable with a new object
  w = new Walker();
}

function draw() {
  //background(51);
  // 04. call the object's functions
  w.display();
  w.update();
}

// 01. Create & define the object
function Walker() {
	this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.05);

	this.update = function () {
    this.acc.setMag(0.05);
    this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function() {
		fill(200,255,0,10);
    stroke(255, 255, 36, 36);
    this.pos.x = noise(xoff) * width;
    this.pos.y = noise(yoff) * height;
    xoff += 0.02;
    yoff += 0.05
		ellipse(this.pos.x, this.pos.y, 36, 36);
	}
}
