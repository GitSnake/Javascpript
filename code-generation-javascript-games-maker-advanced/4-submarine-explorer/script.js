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
	subY=subY+speed*Math.sin(Math.PI*angle/180);
	if (subX<-100){subX=innerWidth;}
	if (subX>innerWidth) {subX=-100;}
	if (subY<-100) {subY=innerHeight;}
	if (subY>innerHeight){subY=-100;}
	setLeft("sub",subX);
	setTop("sub",subY);
	y=getTop("coin");
	setTop("coin",y+1+score*0.1);
	checkHit();
	if (y>window.innerHeight){gameOver();}
}

/* hit calculation function */
function checkHit(){
	if(isOverlapping("sub","coin")){
		score++;
		document.getElementById("scoreTB").innerHTML="Score: "+score;
		setTop("coin",0);
		setLeft("coin",randomNumber(0,innerWidth-100));
		new Audio("beep.mp3").play();
	}
}

/* steer function */
function handleKeys(e){
	if(e.keyCode==38){angle=angle-10;}
	if(e.keyCode==40){angle=angle+10;}
	document.getElementById("sub").style.webkitTransform = 'rotate('+angle+'deg)';
}
/* gameOver function */











