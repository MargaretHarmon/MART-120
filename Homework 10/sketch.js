var redColor = 100;
var greenColor = 150;
var blueColor = 80;

var x = 100;
var y = 200;
var diameter = 50;

var movement = 13;
// this function is called only once
function setup()
{

    createCanvas(400,500);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(redColor,greenColor,blueColor);
    circle(x,y,diameter);
    circle(x,y,25);
  if(x >= 400 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
}
  function draw()
{
  //eyes
  circle(128,180,50);
  circle(260,180,50);

  
  //mouth
  ellipse(200,300,300,50);
  ellipse(x,y,diameter);
  
  
  
  //pupils
  square(128,180,20);
  square(260,180,20);
  
  //top hat
  rect(165,45,60,80);
  ellipse(195,125,100,20);
  
  
  triangle(30,75,58,20,86,75);
  point(100,75);
  
  //smile
  line(50,300, 350, 300);
  
  //name
  textSize(20);
  text('Margaret Harmon', 220,480);
  
  //title
  text('frog lady', 160,30);
  
}
