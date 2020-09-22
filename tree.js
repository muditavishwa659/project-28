class Tree {
    constructor(x,y) {
      this.x = x
      this.y = y
      this.width = 350
      this.height = 400
      this.thickness = 10
      this.bottombody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{
        isStatic : true 
      })
      //this.body = Bodies.rectangle(x,y,options);
      World.add(world, this.bottombody);

      this.image = loadImage("tree.png");
    }
    display(){
      var pos =this.bottombody.position;
       push()
       translate(pos.x,pos.y)
      imageMode(CENTER);
      fill(255)
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image,0,-this.height/2,this.width,this.height)
      pop()
    }
  };