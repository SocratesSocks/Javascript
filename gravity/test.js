var canvas = document.querySelector('canvas');
canvas.height =300;
canvas.width =600;
var c=canvas.getContext('2d');
function Circle()
{
	this.xcord=100;
	this.ycord=100;
	this.radius=20;
	this.dy=1;
	this.dx=1;
	this.draw=function()
	{
		c.beginPath();
		c.arc(this.xcord,this.ycord,this.radius,0,Math.PI*2,false);
		c.strokeStyle='red';
		c.fillStyle='black';
		c.fill();
		c.stroke();
	}
	this.move=function()
	{
		this.ycord+=this.dy;
		this.xcord+=this.dx;
		if(this.ycord>300-this.radius)
		{
			this.dy=-this.dy;
		}
		else
		{
			this.dy=this.dy+0.3;
		}
		if(this.xcord>600-this.radius)
		{
			this.dx=-this.dx;
		}
		else
		{
			this.dx=this.dx+0.3;
		}

	}
}

var circle=new Circle();
function animation()
{
	requestAnimationFrame(animation);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	circle.draw();
	circle.move();
	

}
animation();
