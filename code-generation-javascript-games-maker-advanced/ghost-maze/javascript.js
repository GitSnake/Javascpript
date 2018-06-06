
/* mazeData array */
var mazeData=[
[1,1,1,1,1,1,1,1]
[0,0,1,1,0,0,0,1]
[1,0,0,0,0,1,1,1]
[1,0,1,1,0,1,0,1]
[1,0,1,1,0,0,0,1]
[1,0,0,0,0,1,0,0]
[1,1,1,1,1,1,1,1]
];

/* game variables */

onkeydow=handleKeys;
onready=drawMaze();
var px=0, py=1;

/* functions */
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}

function setTop(id,y){document.getElementById(id).style.top=y+"px";}
