var ape, apeIMG;
var  APtreeIMG, appleIMG, appleCount = 0;
var back1,back2;

function preload(){
//load images 
apeIMG = loadImage("images/ape.png");
appleIMG = loadImage("images/apple.png");
APtreeIMG = loadImage("images/tree.png");
back2 = loadImage("images/jungle.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  //create ape (pc)

back1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
back1.addImage(back2);
back1.scale = 1.73;

ape = createSprite(windowWidth/2,windowHeight/2);
ape.addImage(apeIMG);
ape.scale = 2;

Aptree = new Trees(windowWidth/2 + 650, windowHeight/2 - 360,100,100);
Aptree1 = new Trees(windowWidth/2 - 650, windowHeight/2 - 360,100,100);
Aptree2 = new Trees(windowWidth/2 - 650, windowHeight/2 + 360,100,100);
Aptree3 = new Trees(windowWidth/2 + 650, windowHeight/2 + 360,100,100);

Aptree4 = new Trees(windowWidth/2 + 650, windowHeight/2,100,100);
Aptree5 = new Trees(windowWidth/2 - 650, windowHeight/2,100,100);
Aptree6 = new Trees(windowWidth/2 , windowHeight/2 - 360,100,100);
Aptree7 = new Trees(windowWidth/2 , windowHeight/2 + 360,100,100);

Aptree8 = new Trees(windowWidth/2 + 325, windowHeight/2 + 360,100,100);
Aptree9 = new Trees(windowWidth/2 - 325, windowHeight/2 + 360,100,100);
Aptree10 = new Trees(windowWidth/2 + 325, windowHeight/2 - 360,100,100);
Aptree11 = new Trees(windowWidth/2 - 325, windowHeight/2 - 360,100,100);

Aptree12 = new Trees(windowWidth/2 + 325, windowHeight/2,100,100);
Aptree13 = new Trees(windowWidth/2 - 325, windowHeight/2,100,100);





//create spritess (apples)


apple = new Apples(windowWidth/2 + 640, windowHeight/2 - 380);
apple1 = new Apples(windowWidth/2 + 680, windowHeight/2 - 380);
apple2 = new Apples(windowWidth/2 + 720, windowHeight/2 - 380);
apple3 = new Apples(windowWidth/2 + 600, windowHeight/2 - 380);



}

function draw() {
  background("black");

 //movement of ape 
 if (keyIsDown(UP_ARROW)) {

ape.y = ape.y - 3 ;

 }
 
 if(keyIsDown(DOWN_ARROW)){

  ape.y = ape.y + 3 ;

 }
 
 if(keyIsDown(RIGHT_ARROW)){

ape.x = ape.x + 3;

 }
 
 if(keyIsDown(LEFT_ARROW)){

  ape.x = ape.x - 3;
  
   }

   checkApples(apple);
   checkApples(apple1);
   checkApples(apple2);
   checkApples(apple3);
   

   

 
  drawSprites();
   textSize(22);
  text("find 16 apples, 12 bananas, 14 mangoes ",windowWidth/2 - 200,windowHeight/2);

  textSize(48);
text(appleCount, windowWidth/2 ,windowHeight/2 - 100, );





}


function checkApples(fruit){

  if(ape.isTouching(fruit.apple) && keyIsDown(32)){
    fruit.apple.destroy();
    ape.x = windowWidth/2;
    ape.y = windowHeight/2;
    appleCount = appleCount + 1;
   
    }









}