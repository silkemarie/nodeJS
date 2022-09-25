var timeleft = 10;
var bombTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(bombTimer);
    document.getElementById("countdown").innerHTML = "You're dead";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);