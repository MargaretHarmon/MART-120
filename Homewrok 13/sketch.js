    var characterX = 100;
    var characterY = 100;
    var diameter= 25;
    var shapeX = 30;
    var shapeY = 50;
    var shapeXSpeed;
    var shapeYSpeed;
    var mouseShapeX;
    var mouseShapeY;

    var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    var s = 75;
    var w = 30;
    var a = 55;
    var d = 89;

    var myXs = []; 
    var myYs = []; 
    var myDiameters = [];

    function setup() 
    {
      createCanvas(400, 400);
        for(var i = 0; i < 2; i++)
        {
            myXs[i] = getRandomNumber(400);
            myYs[i] = getRandomNumber(400);
            myDiameters[i] = getRandomNumber(100);
        }
    }

    function draw() 
    {
      background(200,200,200);
      stroke(0);
      fill(0);
      circle(x, y, diameter);
      
    createBorders(10);
    
    drawCharacter();
      
    characterMovement();
      
  exitLabel();
  
  winLabel();
  
  smallCharacter();
  
  smallMovement();
    
    controlCircle();

      ellipse(mousex, mousey, 15, 50);

      for(var i = 0; i < myXs.length; i++)
      {
  
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, 50, 120, 120, 120, 50, 120);
      }
   }

function smallMovement()
{
   shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
}
  
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

    function controlCircle()
    {
      if (x >= 100) 
      {
        x = 50;
      }
      
      if (y >= 100) 
      {
        y = 50;
      }

      if (keyIsDown(s)) 
      {
        y += 15;
      } 
      else if (keyIsDown(w)) 
      {
        y -= 15;
      }

      if (keyIsDown(d)) 
      {
        x += 15;
      } 
      else if (keyIsDown(a)) 
      {
        x -= 15;
      }
  
        // we call the function here.
        changeDiameter();

    }

    
    function changeDiameter()
    {
        if (diameter < 150) 
        {
            diameter += 2;
        } 
        else if (diameter >= 150) 
        {
            diameter = 25;
        }

    }

    function mouseMoved() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }

    function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

    
    function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_blue, outer_red,outer_blue, inner_red, inner_green, inner_blue)
    {
        fill(outer_blue,outer_red, outer_blue);
        circle(x,y,outer_diameter);
        fill(inner_red, inner_green, inner_blue);
        circle(x,y,inner_diameter);
    }
