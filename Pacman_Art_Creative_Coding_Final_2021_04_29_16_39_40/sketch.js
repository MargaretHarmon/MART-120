

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);

  Pacman();
  createBorders();
  food();
  ghosts();
}

function ghosts()
{
  //body pink
  fill(500,200,200);
  rect(340, 60, 55, 55, 20);
  
  // eyes
  fill(255);
  ellipse(333,50,18,18);
  
  fill(255);
  ellipse(348,50,18,18);
  
  
  //pupils
  fill(0);
  ellipse(333,50,10,10);
  
  fill(0)
  ellipse(348,50,10,10);
  
  //wings
    fill(0);
  triangle(360, 70, 375, 100, 350, 100);
  
  fill(0);
  triangle(348, 70, 360, 100, 340, 100);
  
  fill(0)
  triangle(338, 70, 350, 100, 330, 100);
  
   fill(0)
  triangle(325, 70, 340, 100, 310, 100);
  
  
  
  //body blue
  fill(0,200,400)
  rect(60, 250, 55, 55, 20);
  
   // eyes
  fill(255)
  ellipse(52,240,18,18)
  
  fill(255)
  ellipse(69,240,18,18)
  
   //pupils
  fill(0)
  ellipse(52,240,10,10);
  
  fill(0)
  ellipse(69,240,10,10);
  
  //wings
   fill(0)
  triangle(80, 260, 90, 280, 75, 280);
  
  fill(0)
  triangle(70, 260, 80, 280, 65, 280);
  
   fill(0)
  triangle(60, 260, 70, 280, 55, 280);
  
   fill(0)
  triangle(50, 260, 60, 280, 45, 280);
  
   fill(0)
  triangle(40, 260, 50, 280, 35, 280);

}

function food()
{
  
  fill(255)
  ellipse(160,90,15,15);
  
    fill(255)
  ellipse(120,90,15,15);
  
  fill(255)
  ellipse(80,90,15,15);
  
  fill(255)
  ellipse(40,90,15,15);
  
   fill(255)
  ellipse(40,45,15,15);
  
  fill(255)
  ellipse(80,45,15,15);
  
  fill(255)
  ellipse(40,130,15,15);
  
  fill(255)
  ellipse(40,170,15,15);
  
  fill(255)
  ellipse(40,210,15,15);
  
  fill(255)
  ellipse(40,360,25,25);
  
  fill(255)
  ellipse(85,360,15,15);
  
    fill(255)
  ellipse(85,320,15,15);
  
  fill(255)
  ellipse(40,320,15,15);
  
    fill(255)
  ellipse(135,320,15,15);
  
  fill(255)
  ellipse(135,360,15,15);
  
   fill(255)
  ellipse(175,360,15,15);
  
  fill(255)
  ellipse(215,360,15,15);
  
  fill(255)
  ellipse(257,360,15,15);
  
   fill(255)
  ellipse(257,320,15,15);
  
  fill(255)
  ellipse(257,280,15,15);
  
   fill(255)
  ellipse(300,280,15,15);
  
   fill(255)
  ellipse(257,45,25,25);
  
   fill(255)
  ellipse(215,45,15,15);
  
   fill(255)
  ellipse(257,90,15,15);
  
  fill(255)
  ellipse(360,200,25,25);
  
  fill(255)
  ellipse(360,240,15,15);
  
  fill(255)
  ellipse(360,160,15,15);
  
  fill(255)
  ellipse(320,160,15,15);
}

    function createBorders()
{
  //Top wall
  fill(0,0,400);
rect(200,2, 400, 3);
  
  fill(0,0,400);
rect(60,10, 100, 3);
  
   fill(0,0,400);
rect(340,10, 100, 3);
  
  fill(0,0,400);
rect(110,35, 3, 50);
  
  fill(0,0,400);
rect(115,35, 3, 50);
  
  fill(0,0,400);
rect(198,10, 169, 3);
  
    fill(0,0,400);
rect(290,35, 3, 50);
  
  fill(0,0,400);
rect(283,35, 3, 50);
  
  //Right Wall
  fill(0,0,400);
rect(398,200, 3, 400);
  
    fill(0,0,400);
rect(390,200, 3, 380);
 
  
  //bottom wall
  fill(0,0,400);
rect(200,398, 400, 3);
  
  fill(0,0,400);
rect(60,390, 100, 3);
  
  fill(0,0,400);
rect(290,365, 3, 50);
  
  fill(0,0,400);
rect(283,365, 3, 50);
  
   fill(0,0,400);
rect(115,365, 3, 50);
  
  fill(0,0,400);
rect(110,365, 3, 50);
  
  fill(0,0,400);
rect(200,390, 168, 3);
  
    fill(0,0,400);
rect(340,390, 100, 3);
  
  //left wall
    fill(0,0,400);
rect(2,200, 3, 400);
  
  fill(0,0,400);
rect(10,200, 3, 380);
  
  
  //middle lovelyness
  
  fill(0,0,400);
rect(200,325, 80, 3);
  
  fill(0,0,400);
rect(200,330, 80, 3);
  
   fill(0,0,400);
rect(200,260, 180, 3);
  
  fill(0,0,400);
rect(200,265, 180, 3);
  
  fill(0,0,400);
rect(398,200, 3, 400);
  
    fill(0,0,400);
rect(390,200, 3, 380);
  
  fill(0,0,400);
rect(110,225,3, 80)
  
   fill(0,0,400);
rect(115,225,3, 80)
  
  fill(0,0,400);
rect(290,225,3, 80)
  
   fill(0,0,400);
rect(285,225,3, 80)
  
   fill(0,0,400);
rect(200,180, 60, 3);
  
   fill(0,0,400);
rect(200,185, 60, 3);
  
  
   fill(0,0,400);
rect(203,130,3, 100)
  
  fill(0,0,400);
rect(198,130,3, 100)
  
     fill(0,0,400);
rect(310,120, 60, 3);
  
   fill(0,0,400);
rect(310,125, 60, 3);
  
     fill(0,0,400);
rect(90,120, 60, 3);
  
   fill(0,0,400);
rect(90,125, 60, 3);
  
   fill(0,0,400);
rect(30,300, 40, 3);
  
  fill(0,0,400);
rect(30,305, 40, 3);
  
   fill(0,0,400);
rect(370,300, 40, 3);
  
  fill(0,0,400);
rect(370,305, 40, 3);
}

    function Pacman()
{
  fill(255,255,0);
  noStroke()
  ellipse(200,220,55,55);
  
  fill(0,0,0);
  triangle(200,220,400,100,400, 300);
  
fill(0);
ellipse(205,205,10,10);
}



  
  


  

