var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
  createCanvas(400, 400);
  
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
}

function draw()
{
  background(200,200,200);
  stroke(0);
  fill(0);
  
  createBorders(10);
  
  drawCharacter();
  
  characterMovement();
  
  exitLabel();
  
  winLabel();
  
  smallCharacter();
  
  
  
function smallCharacter()
  {
    fill(13,300,50);
  circle(shapeX, shapeY,10);
  
 shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
  
  if(shapeX > 400)
    {
      shapeX = 0;
    }
  if(shapeX < 0)
    {
      shapeX = 400;
    }
  if(shapeY > 400)
    {
      shapeY = 0;
    }
  if(shapeY < 0)
    {
      shapeY = 400;
    }
  
  fill(300,200,200);
  circle(mouseShapeX, mouseShapeY, 25);
}
  }

function winLabel()
{
  if(characterX > 0 && characterY > 380)
    {
      fill(0);
      stroke(5);
      textSize(50);
      text("YOU WIN!", 40,380);
    }
}

function exitLabel()
{
  textSize(16);
  text("EXIT",10,380);
}

function characterMovement()
{
  if(keyIsDown(w))
    {
      characterY -= 10;
    }
  if(keyIsDown(s))
    {
      characterY += 10;
    }
  if(keyIsDown(a))
    {
      characterX -= 10;
    }
  if(keyIsDown(d))
    {
      characterX += 10;
    }
}

function drawCharacter()
{
  fill(500,100,123);
  circle(characterX, characterY,25);
}

function createBorders(thickness)
{
   rect(0,0,400,thickness);
  rect(0,0,thickness,400);
  rect(60,390,400,thickness);
  rect(390,0,thickness,400);
}

function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
  

  
{}