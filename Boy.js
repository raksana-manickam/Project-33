class Boy {
     constructor(x, y, width, height) {
          var options = {
             
              restitution :0.4,
              friction :0.0,
              //isStatic:true
             
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         rectMode(CENTER);
         rect(pos.x, pos.y,this.width, this.height);
         image(boy_image, pos.x-80, pos.y-90,145,175);
    }
}