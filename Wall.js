class Wall {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.body.isStatic=true;
      image(this.image,1195,512,180,140)
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      rectMode(CENTER);
      fill("black");
      rect(0,0, this.width, this.height);
      pop();
      
    }
  };
  