class Particles {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,225),random(0,225),random(0,225))
        World.add(world,this.body)
    }
   
   display(){
push()
fill(this.color)
ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.r)
    pop()
 }
}