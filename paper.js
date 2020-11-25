class Paper
    {
    constructor(x,y,r,width)
    {
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
     this.x=x
     this.y=y;
     this.r=r
     this.width = w
     this.body=Bodies.circle(this.x,this.y,this.r/2,this.width,options)
     this.image = loadImage("paper.png");
     World.add(world,this.body);  
    }
    display()
    {
     var paperpos = this.body.position;
     push();
     translate(paperpos.x,paperpos.y);
     rectMode(CENTER)
     fill(255,255,255);
     ellipse(0,0,this.r);
     imageMode(CENTER);
     image(this.image,0,0,this.r,40);
     pop();
    }
     }