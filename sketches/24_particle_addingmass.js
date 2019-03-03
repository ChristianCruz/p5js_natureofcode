var particle;

function setup() {
  createCanvas(640, 360);
  particle = new Particle();
}

function draw() {
  background(51);
  var wind = createVector(0.1, 0);

  var gravity = createVector(0.3, 0.1);
  particle.applyForce(gravity);

  particle.display();
  particle.update();
}

//- - CUSTOM FUNCTIONS - -//

function Particle(x, y, m) {
	this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  this.applyForce = function(force) {
    this.acc = force;
  }

	this.update = function () {
		this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
	}

	this.display = function() {
		fill(255);
		ellipse(this.pos.x, this.pos  .y, 48, 48);
	}
}
