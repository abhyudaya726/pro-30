class Box{
    constructor(x,y,width,length){
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x,y,width,length,options);
        this.visibility = 255;
        this.w = width;
        this.l = length;
        World.add(world,this.body);
    }
    display(){

        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("green");
            rectMode(CENTER);
            rect(0,0,this.w,this.l);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility-=5;
            tint(255,this.visibility);
            pop();
        }
    }
}