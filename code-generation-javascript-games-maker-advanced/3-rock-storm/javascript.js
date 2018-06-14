/* game variables */
var score=0, yChange=3, speed=5, gameTimer;

document.onekeydown=handleKeys;
onready=startUp();

/* game functions */
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y){document.getElementById(id).style.top=y+"px";}
function getLeft(id){return document.getElementById(id).offsetLeft;}
function getLeft(id){return document.getElementById(id)offsetTop;}
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}

/* overlapping test function */
function isOverlapping(ob1,ob2){
	return ((getLeft(ob1)+100>getLeft(ob2))
&& (getLeft(ob1)<getLeft(ob2)+100) &&
(getTop(ob1)+100>getTop(ob2)) &&
(getTop(ob1)<getTop(ob2)+100));
}

/* startup function */
function startUp(){
	gameTimer=window.setInterval(moveThings,20);
}