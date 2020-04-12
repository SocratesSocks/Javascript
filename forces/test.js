
var canvas = document.querySelector('canvas');
canvas.height =300;
canvas.width =600;
var c=canvas.getContext('2d');

function Object(x,y,f,m,iv)
{
	this.x=x;
	this.y=y;
	this.f=f;
	this.m=m;
	this.dx=iv;
	this.acc=(this.f/this.m);
	this.draw=function()
	{
		c.beginPath();
		c.fillStyle='blue'
		c.fillRect(this.x,this.y,30,30);
		c.fill();
		c.stroke();

	}
	this.move=function()
	{
		this.dx=this.dx+this.acc;
		this.x=this.x+this.dx;
		if(this.x>600-30)
		{
			this.dx=-this.dx;
		}
	}
}

var o=new Object(10,270,1,5,0.1);

function animation()
{
	requestAnimationFrame(animation)
	c.clearRect(0,0,window.innerWidth,window.innerHeight);

	o.draw();
	o.move();
	console.log(o.dx);
}
animation();