class Dustbin {
    constructor(x,y,width,hieght){
        var options = {
            'isStatic':true,
          
        }
        this.body = Bodies.rectangle(x,y,width,hieght,options)
       World.add(world,this.bodyb);
        this.width = width;
        this.hieght = hieght;

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,this.width,this.hieght);
    }
};