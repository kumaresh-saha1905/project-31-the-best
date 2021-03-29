class umbrella{
    constructor(x,y){
    var opt={
        'isStatic':true,
        'density':1
        
    }
     this.x=x;
     this.y=y;
     this.radius=30;
     this.body=Bodies.circle(x,y,30,opt);
     this.image=loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
     World.add(world,this.body);
}
        display(){
          var pos=this.body.position;
          imageMode(CENTER);
         image(this.image,pos.x,pos.y,500,500);
        }
 }
 