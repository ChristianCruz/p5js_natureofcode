// 02. Declare a variable
var w;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 03. Associate the variable with a new object
  w = new Walker();
}

function draw() {
  background(51);
  // 04. call the object's functions
  w.display();
  w.update();
}

// 01. Create & define the object
function Walker() {
	// Define starting position, velocity, and acceleration
  // with vectors
	this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.1)

	// Add movement (update function)
	this.update = function () {
    // the position changes by adding velocity
    // the velocity changes by adding acceleration
    this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	// What is and where to show the object
	this.display = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}
