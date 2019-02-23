// 02. Declare a variable
var w;

function setup() {
  createCanvas(640, 360);
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
	// Define starting position
	this.x = width/2;
	this.y = height/2;

	// Add movement (walking function)
	this.walk = function () {
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}

	// What is and where to show the object
	this.display = function() {
		fill(255);
		ellipse(this.x, this.y, 48, 48);
	}
}