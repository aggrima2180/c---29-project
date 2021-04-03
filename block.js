class Block{
    constructor(x,y,width,height){
        var options = {
            restitution :0.3,
            friction : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.visibility = 255
        World.add(world,this.body);
    }
    display(){
       // var angle = this.body.angle;
       var pos = this.body.position;
      //  push();
        rectMode(CENTER);
        fill(240,128,128);
        rect(pos.x,pos.y,this.width,this.height);
       // pop();
        
    }
}