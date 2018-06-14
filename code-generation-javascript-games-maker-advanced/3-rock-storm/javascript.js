/* game variables */
var score=0, yChange=3, speed=5, gameTimer;

document.onekeydown=handleKeys;
onready=startUp();

/* functions */
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y){document.getElementById(id).style.top=y+"px";}
function getLeft(id){return document.getElementById(id).offsetLeft;}
function getLeft(id){return document.getElementById(id)offsetTop;}
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}