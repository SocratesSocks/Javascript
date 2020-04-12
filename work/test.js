var canvas = document.querySelector('canvas')
canvas.height =400;
canvas.width=400;
var c=canvas.getContext('2d');
var rows = new  Array(40);
var arr = new Array(40);

for(let i=0;i<rows.length;i++)
{
	arr[i]=new Array(40);
}


function randomizeGrid(arr)
{
	for(let i=0;i<40;i++)
	{
		for(let j=0;j<40;j++)
		{
			arr[i][j]=Math.floor(Math.random()*2);
		}
	}
	return arr;
}
arr=randomizeGrid(arr);
function nextState(arr)
{
	for(let i=1;i<40-1;i++)
	{
		for(let j=1;j<40-1;j++)
		{
			var sumNeighbours=countNeighboursNew(arr,arr[i][j],i,j);
			if(sumNeighbours<2)
			{
				arr[i][j]=0;

			}
			else if(sumNeighbours==3)
			{
				arr[i][j]=1;
			}
			else if(sumNeighbours>3)
			{
				arr[i][j]=0;
			}
			else
			{
				continue;
			}
		}
	}
	return arr;
}
function countNeighboursNew(arr,ele,i,j)
{
	var count=0;
	for(let n=i-1;n<=i+1;n++)
	{
		for(let m=j-1;m<j+1;m++)
		{
			if(m==n)
			{
				continue;
			}
			if(arr[n][m]==1)
			{
				count++;
			}
			else
			{
				continue;
			}
		}
	}
	return count;
}


function countNeighbours(grid,element,i,j)
{
	var count=0;
	if(grid[i][j-1]==1)
	{
		count++;
	}
	if(grid[i][j+1]==1)
	{
		count++;
	}
	if(grid[i-1][j]==1)
	{
		count++;
	}
	if(grid[i+1][j]==1)
	{
		count++;
	}
	if(grid[i-1][j-1]==1)
	{
		count++;
	}
	if(grid[i+1][j+1]==1)
	{
		count++;
	}
	if(grid[i-1][j+1])
	{
		count++;
	}
	if(grid[i-1][j-1]==1)
	{
		count++
	}
	return count;
}


function animation()
{
	requestAnimationFrame(animation);
	arr=nextState(arr);
	for(let i=0;i<40;i++)
	{
	for(let j=0;j<40;j++)
	{
		var x=j*10;
		var y=i*10;
		c.fillRect(x,y,10-1,10-1);
		if(arr[i][j]==1)
		{
			c.fillStyle='black';
		}
		else
		{
			c.fillStyle='white';
		}

	}
	for(let i=0;i<400;i++)
	{
	for(let j=0;j<4000;j++)
	{}}

}


}

animation();

/*c=canvas.getContext('2d');
var x=200;
var dx=2;
function animation()
{
	requestAnimationFrame(animation);
	c.clearRect(0,0,500,400);
	c.beginPath();
	c.arc(x,200,30,Math.PI*2,false);
	c.strokeStyle='blue'
	c.stroke();
	x=x+dx;
	if(x>500-30||x-30<0 )
	{
		dx=-dx
	}

}

animation();/
*/