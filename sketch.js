function setup() {
    createCanvas(1000,600);
    background(51);
    stroke(0, 0, 0);
}

function keyTyped() {
    if (key === 'r') {
	stroke(255, 0, 0);
    } else if (key === 'g') {
	stroke(0, 255, 0);
    } else if (key === 'b') {
	stroke(0, 0, 255);
    } else if (key ==='p') {
	stroke(200,0,200);
    } else if (key === 'y') {
	stroke(255,255,0);
    } else if (key === 'k') {
	stroke(0,0,0);
    } else if (key ==='c') {
	stroke(0,255,255);
    }
}

function draw() {
    strokeWeight(4);
    if (mouseIsPressed) {
	line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
