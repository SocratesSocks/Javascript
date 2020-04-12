var canvas = document.querySelector('canvas');
canvas.height =window.innerHeight;
canvas.width =window.innerWidth;

var c=canvas.getContext('2d');
/*
var grid =new Array(10);
for(let i=0;i<10;i++)
{
	grid[i]=new Array(10);
}
for(let i=0;i<10;i++)
{
	for(let j=0;j<10;j++)
	{
		grid[i][j]=0;
	}
}
grid[1][0]=1;

for(let i=0;i<10;i++)
{
	for(let j=0;j<10;j++)
	{
		var x=j*40;
		var y=i*40;
		c.beginPath();
		if(grid[i][j]==0)
		{
			c.fillStyle='red';
		}
		else
		{
			c.fillStyle='black';
		}
		c.fillRect(x,y,40-5,40-5);

	}
}

console.log(grid)*/
function circle()
{
	this.xcord=Math.random()*(window.innerWidth-30*2)+30;
	this.ycord=Math.random()*(window.innerHeight-30*2)+30;
	this.dx=Math.floor(Math.random()*10);
	this.dy=Math.floor(Math.random()*10);
	this.radius=30;
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
		this.xcord=this.xcord+this.dx;
		this.ycord=this.ycord+this.dy;
		if(this.xcord>window.innerWidth-this.radius||this.xcord<=this.radius)
		{
			this.dx=-this.dx;
		}
		if(this.ycord>window.innerHeight-this.radius||this.ycord<=this.radius)
		{
			this.dy=-this.dy;
		}

	}

}

var circles=[];
for(let i=0;i<20;i++)
{
	var circle_ele=new circle();
	circles.push(circle_ele);

}

function animation()
{
	requestAnimationFrame(animation);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	for(let i=0;i<circles.length;i++)
	{
		circles[i].draw();
		circles[i].move();

	}


}
animation();

