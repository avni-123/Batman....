class Rain{

    constructor(x, y, radius){

        var options = {

            'restitution': 0.8,

            'friction': 0.1,

            'density': 1.0,

      }

      this.body = Bodies.circle(x, y, radius, options);

      this.radius = radius;

      this.image = loadImage("waterdrops.png");

      World.add(world, this.body);

    }

     update(){

      if(this.body.position.y > 700){

        Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});

      }

     }

      display(){

        push();

        imageMode(CENTER);

        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);

        pop();

      }

    }
  