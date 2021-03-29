const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
  var umb;//it is the name of the variable of umbrella with the boy
   var t1,t2,t3,t4;
var drops=[];
var maxDrops=100;
 var thunderCreatedFrame=0; // question
function preload(){
    t1=loadImage("1.png");
    t2=loadImage("2.png");
    t3=loadImage("3.png");
    t4=loadImage("4.png");
}

function setup(){
    
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    
   
    umb=new umbrella(200,400);
    rand=Math.round(random(1,4))
        if(frameCount%80===0){
            thunderCreatedFrame=frameCount;
            thunder=createSprite(random(10,370),random(10,30),10,10);
            switch(rand){
                case 1: thunder.addImage(t1);
                break;
                case 2: thunder.addImage(t2);
                break;
                case 3 :thunder.addImage(t3);
                break;
                case 4 : thunder.addImage(t4);
                break;

                default:break;
            }
            thunder.scale=random(0.3,0.6);
        }
}

function draw(){
    Engine.update(engine) ;
    background("black");
    

    for(var i=0; i<maxDrops; i++){
        drops.push(new CreateDrop(random(0,400),random(0,400)));
        drops[i].display();//question
        drops[i].update();//question
 
     }
     umb.display();

    drawSprites();
    
}   

