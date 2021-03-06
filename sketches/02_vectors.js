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
  w.walk();
}

// 01. Create & define the object
function Walker() {
	// Define starting position with vectors 
	this.pos = createVector(width/2, height/2);

	// Add movement (walking function)
	this.walk = function () {
    // using vector addition
		this.vel = createVector(random(-2, 2), random(-2, 2));
		this.pos = this.pos.add(this.vel);
	}

	// What is and where to show the object
	this.display = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}
