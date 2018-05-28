const score=0, gameTime=0, gameTimer, ufoX=0, ufoY=0;

onkeydown=handleKeys;

onready=startUp();

function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y){document.getElementById(id).style.top=y+"px";}
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}