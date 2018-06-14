
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
function drawMaze(){
	for(var y=0; y<7; y++){
		for(var x=0;x<8; x++){
			var newOb=document.createElement('div');
			document.getElementById("mazeHolder").appendChild(newOb);
			var divId=Math.random();
			newOb.setAttribute('id',divId);
			setLeft(divId,50*x);
			setTop(divId,50*y);
			if(mazeData[y][x]==0){
				document.getElementById(divId).style.backgroundColor="blue";
			}
		}
	}
}
