let raindrop = [];

function setup() {
  createCanvas(400, 600);
  fill(240);
  noStroke();
}

function draw() {
  background('lightgray');
  let t = frameCount / 100;

  for (let i = 0; i < random(5); i++) {
    raindrop.push(new raindrops());
  }

  for (let drop of raindrop) {
    drop.update(t);
    drop.display();
  }
}

function raindrops() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6;
    let angle = w * time + this.initialangle;

    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = raindrop.indexOf(this);
      raindrop.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
