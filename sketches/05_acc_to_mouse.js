// 02. Declare a variable
var w;

function setup() {
  createCanvas(640, 480);
  // 03. Associate the variable with a new object
  w = new Walker();
}

function draw() {
  background(51);
  // 04. call the object's functions
  w.update();
  w.display();
}

// 01. Create & define the object
function Walker() {
	this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.4);

	this.update = function () {
    //var mouse = createVector(mouseX, mouseY);
    this.acc.setMag(0.4);
    this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	// What is and where to show the object
	this.display = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}
