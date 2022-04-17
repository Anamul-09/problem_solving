
// var canvas=document.querySelector("#myCanvas");
// var ctx=canvas.getContext("2d");


// ctx.lineWidth=3
// ctx.strokeStyle="black";
// ctx.strokeRect(10,10,380,280)

// ctx.fillStyle="green";
// ctx.fillRect(12,12,376,276);

// var canvasX=canvas.width / 2;
// var canvasY=canvas.height / 2;

// ctx.beginPath();
// ctx.arc(canvasX,canvasY,80,0,2 * Math.PI,false);
// ctx.fillStyle="red";
// ctx.fill();
// ctx.stroke();


var canvas =document.querySelector("#myCanvas");
var ctx=canvas.getContext("2d");
ctx.lineWidth=3
ctx.strokeStyle="black";
ctx.strokeRect(10,10,380,280)

ctx.fillStyle="green"
ctx.fillRect(12,12,376,276);

var canvasX=canvas.width/2;
var canvasY=canvas.height/2;

ctx.beginPath();
ctx.arc(canvasX,canvasY,70,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.stroke();
ctx.fill();


