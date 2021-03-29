let x = 200;
let y = 300;
let goleft = false;


function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(123,80,129);
  

  //eyes//
 { circle(128,180,50);
  fill(255,0,150);
  circle(260,180,50);}
  
  //mouth//
  ellipse(x,y,50,50);
  if(goleft ==false){
    x= x+2
  }
  if(goleft==true){
    x=x-2
  }
  if(x>400)
  {
    goleft= true;
  }
 if(x<0)
  {
    goleft= false;
  }
   if(goleft ==false){
    randomSeed(y= y+4)
  }
  if(goleft==true){
    y=y-4
  }
  if(y>500)
  {
    goleft= true;
  }
 if(x<0)
  {
    goleft= false;
  }
  
  //pupils//
  square(x,180,20);
  square(260,y,20);
  
  //top hat//
  rect(165,45,60,80);
  ellipse(195,y,100,50);
  
  
  triangle(x,75,x,20,x,75);
  point(100,75);
  
  //smile//
  line(50,300, 350, 300);
  
  //name//
  textSize(20);
  text('Margaret Harmon', 220,480);
  
  //title//
  text( 'frog lady' , 160,30);

  
  
  
  



}