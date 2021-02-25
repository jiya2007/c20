var a,b

function setup() {

  createCanvas(800,400);
  a=createSprite(400, 200, 80, 50);
  a.shapeColor='yellow'

b= createSprite(100,200,50,50)
b.shapeColor='yellow'
}

function draw() {
  background('green');  

  console.log(a.x-b.x)

  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2  &&  a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2){
    a.shapeColor='blue'
    b.shapeColor='blue'
  
  }

  else{
    a.shapeColor='yellow'
    b.shapeColor='yellow'
  }

  a.x=mouseX
  a.y=mouseY
  drawSprites();
}