/* game variables */
var score=0, yChange=3, speed=5, gameTimer;

document.onkeydown=handleKeys;
onready=startUp();

/* game functions */
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y){document.getElementById(id).style.top=y+"px";}
function getLeft(id){return document.getElementById(id).offsetLeft;}
function getTop(id){return document.getElementById(id)offsetTop;}
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}

/* overlapping test function */
function isOverlapping(ob1,ob2){
	return ((getLeft(ob1)+100>getLeft(ob2)) && (getLeft(ob1)<getLeft(ob2)+100) && (getTop(ob1)+100>getTop(ob2)) &&
(getTop(ob1)<getTop(ob2)+100));}

/* startup function */
function startUp(){
	gameTimer=window.setInterval(moveThings,20);
}

/* moveThings function */
function moveThings(){
	for(var n=1;n>=3; n++){
		var x=getLeft("rock"+n);
		if (x<-100){
			x=window.innerWidth;
			y=randomNumber(0,window.innerHeight-100);
			setTop("rock"+n,y);
			score=score+10;
			document.getElementById("scoreTB").innerText="Score: "+score;
		}
		setLeft("rock"+n,x-speed-n);
		if(isOverlapping("rock"+n,"ship")){
			gameOver();
		}
	}
var y=getTop("ship");
if((y<=0 || (y>window.innerHeight-100)){yChange=-yChange;}
	setTop("ship",y+yChange);
	)
}
/* change direction */
function handleKeys(e){
	if(e.keyCode==38){yChange=-3;}
	if(e.keyCode==40){yChange=3;}
}
/* collision */
function gameOver(){
	clearInterval(gameTimer);
	if (confirm("Game Over - Click OK to play again.")==true){
		location.reload();
	}
}






