var canvas= document.querySelector('canvas');
canvas.height =500;
canvas.width =500;

var c = canvas.getContext("2d");


c.translate(0,300);
c.fillRect(0,0,100,100);