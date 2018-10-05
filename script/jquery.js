function getMousePos(e) {
    return {x:e.pageX,y:e.pageY};
}

document.onmousemove=function(e) {
    var mousecoords = getMousePos(e);
    var coordsX=mousecoords.x
    var coordsY=mousecoords.y;
    moveSquare(coordsX,coordsY);   
   
};

function moveSquare(coordsX,coordsY){
    var square=document.getElementById('square');
    square.style.left=coordsX-square.offsetWidth/2+"px";
    square.style.top=coordsY-square.offsetHeight/2+"px";
    
}



