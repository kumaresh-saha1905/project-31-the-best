class CreateDrop{
    constructor(x,y){
        var option={
            'restitution':0.1,
            'friction':1
            
            
        }
        this.x=x;
        this.y=y;
        this.radius=5;
        this.rain=Bodies.circle(x,y,5,option);
        World.add(world,this.rain);
        
    }
    update(){
        if(this.rain.position.y>height){
            Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }
     display(){
       
        strokeWeight(1);
      stroke("blue");
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(this.rain.position.x,this.rain.position.y, this.radius, this.radius);
     
     }
}