class Ground{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);
	}

	display()
	{
		var gPos = this.body.position;

		fill("lightgrey")
		rectMode(CENTER);
		rect(gPos.x,gPos.y,this.w, this.h);
 }
}