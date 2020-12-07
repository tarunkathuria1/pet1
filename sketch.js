//Create variables here
var dog,doghappy,database,foodS,dogimage,doghappyimage,foodStock,lastStock;
function preload()
{
  //load images here
  dogimage=loadImage("Dog.png");
  doghappyimage = loadImage("happy dog.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();

  dog=createSprite(200,200,10,10)
  dog.addImage(dogimage)
  dog.scale=0.2;
  
  foodStock=database.ref("food");
  foodStock.on("value",readStock)

  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(doghappyimage);
}

  drawSprites();
  //add styles here
text("food remaining:"+foodS,180,200);
text("Note:press up arrow to feed the dog",130,300);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').update({
    food:x
  })
}


