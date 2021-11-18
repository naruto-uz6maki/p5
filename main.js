function preload() {
  img=loadImage('img.jpg');
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
}

function draw() {
  image(img, 200,200,200,200);
  fill("red");
  circle(160,200,40);
  circle(400,200,40);
  circle(160,400,40);  
  circle(400,400,40);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

