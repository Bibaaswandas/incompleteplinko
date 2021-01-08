class Plinko { 
    constructor(x, y,r) { 
    var options ={ 
        isStatic: true,
        restitution: 0.4 
    } 
    this.r= r; 
    this.body = Bodies.circle(x, y, 10,options); 
    World.add(world, this.body); 
    } 
    display() { 
    var pos = this.body.position; 
    var angle = this.body.angle; 
    push(); 
    translate(pos.x, pos.y); 
    rotate(angle); 
    imageMode(CENTER); 
    fill("white") 
    ellipseMode(RADIU5); 
    ellipse(0, 0, 10,10); 
    pop(); 
    
    }
    } 
    ; 