/* game variables */
var score=0, angle=0, speed=4, subX=0, subY=500, gameTimer;
onkeydown=handleKeys;
gameTimer=window.setInterval(moveThings,20);
/* game functions */
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y){document.getElementById(id).style.top=y+"px";}
function getLeft(id){return document.getElementById(id).offsetLeft;}
function getTop(id){return document.getElementById(id).offsetTop;}
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}

/* overlapping test code */
function isOverlapping(ob1,ob2){
	return ((getLeft(ob1)+50)>getLeft(ob2)) && (getLeft(ob1)<getLeft(ob2+50) && (getTop(ob1)+50));
}

/* moveThings function */
function moveThings(){
	subX=subX+speed*Math.cos(Math.PI*angle/180);
}