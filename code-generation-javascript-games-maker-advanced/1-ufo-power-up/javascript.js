var score=0, gameTime=0, gameTimer, ufoX=0, ufoY=0;

onkeydown=handleKeys;

onready=startUp();

function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y){document.getElementById(id).style.top=y+"px";}
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}

function startUp(){
	moveAtom();

	gameTimer=window.setInterval(displayTime, 1000);
}

function displayTime(){
	gameTime++;
	document.getElementById("timeTB").innerText="Time:"+gameTime;
}

function moveAtom(){
	atomX=randomNumber(2,16);
	atomY=randomNumber(2,16);
	setLeft("atom",50*atomX);
	setTop("atom",50*atomY);
}

function handleKeys(e){
	if(e.keyCode==37){ufoX--;}
	if(e.keyCode==39){ufoX++;}
	if(e.keyCode==38){ufoY--;}
	if(e.keyCode==40){ufoY++;}
	setLeft("ufo",50*ufoX);
	setTop("ufo",50*ufoY);
	checkIfHitAtom();
}

function checkIfHitAtom(){
	if((ufoX==atomX) && (ufoY==atomY)){
		score++;
		document.getElementById("scoreTB").innerText="Score: "+score;
		moveAtom();
		if(score==5){gameOver();}
	}
}

function gameOver(){
	clearInterval(gameTimer);
	alert("Well done! Your time was: " + gameTime);
	location.reload();
}



