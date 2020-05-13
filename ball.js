class Ball {

    constructor(x,y,width,height){
            var options ={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width =  width;
        this.height = height;
        this.velocityY = 5;
        World.add(world,this.body)
    }
  
    display(){
       var pos = this.body.position;
       ellipseMode(CENTER);
       fill("yellow");
       ellipse(pos.x,pos.y,this.width,this.height);
    }
}