const ball = document.getElementById("ball");
document.addEventListener("keydown",HandleKeyPress);
let position = 0;

function HandleKeyPress(e){
  if(e.code === "ArrowLeft"){
    position = position - 10;
  }
  if(e.code ==="ArrowRight"){
    position = position + 10;
  }
  if(position < 0 ){
    positon = 0;
  }
  refresh();
}

function refresh(){
  ball.style.left = position + "px";
}